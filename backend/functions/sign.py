from bson.objectid import ObjectId
from fastapi import HTTPException, status
from schemas.sign import *
from schemas.user import CurrentUser
from datetime import datetime
from db.mongo import db
from pymongo.errors import PyMongoError
import os


def show(id: str):
    sign = db.signs.find_one({"_id": ObjectId(id)})
    if not sign:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Sign with the id {id} is not available",
        )
    else:
        sign["id"] = str(sign.pop("_id"))
        return sign

def get_all(email: str):
    signs = list(db.signs.find({"email": email}))
    return signs


def create(request: SignBase, current_user: CurrentUser):
    try:
        new_sign = dict(
            user_email= current_user.email,
            label=request.label,
            fecha_creacion=datetime.now().strftime("%Y%m%d%H%M%S"),
            fecha_modificacion=datetime.now().strftime("%Y%m%d%H%M%S"),
        )
        result = db.signs.insert_one(new_sign)
        new_sign = db.signs.find_one({"_id": result.inserted_id})
        new_sign["id"] = str(new_sign.pop("_id"))
        return new_sign

    except PyMongoError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )


def upload_file(file_id, file, current_user):
    user_email = current_user.email
    try:
        img_path = f"./data/{user_email}/"
        try:
            os.mkdir(img_path)
        except:
            pass
        contents = file.file.read()
        img_name = datetime.now().strftime("%Y%m%d%H%M%S")
        with open(img_path + f"{img_name}.jpg", "wb") as f:
            f.write(contents)
    except Exception:
        return {"message": "There was an error uploading the file"}
    finally:
        file.file.close()
    db.logs.insert_one(
        dict(
            type_event="file_uploaded",
            date=datetime.now().strftime("%Y%m%d%H%M%S"),
            description=f"El usuario creó una seña: {img_name}",
            user=user_email,
        )
    )
    return {"message": f"Successfully uploaded {file.filename}"}


def destroy(id: str):
    result = db.signs.delete_one({"_id": ObjectId(id)})
    if not result.deleted_count:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Sign with id {id} not found"
        )
    else:
        return "deleted"


def update(id: str, request: EditSign):
    updated_sign = dict(request)
    result = db.signs.update_one({"_id": ObjectId(id)}, {"$set": updated_sign})
    if not result.modified_count:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Sign with id {id} not found"
        )
    else:
        updated_sign = db.signs.find_one({"_id": ObjectId(id)})
        return updated_sign

