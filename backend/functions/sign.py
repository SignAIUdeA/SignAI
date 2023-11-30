from bson.objectid import ObjectId
from fastapi import File, HTTPException, UploadFile, status
from schemas.sign import *
from schemas.user import CurrentUser
from datetime import datetime
from db.mongo import db
from pymongo.errors import PyMongoError
import os
import shutil
import mimetypes


def build_sign(sign) -> ShowSign:
    return ShowSign(
        id=str(sign["_id"]),
        label=sign["label"],
        creation_date=datetime.strptime(
            sign["creation_date"], "%Y%m%d%H%M%S").strftime("%Y-%m-%d %H:%M:%S"),
        role_user=sign["role_user"],
        upload_by=sign["upload_by"],
        path_file=sign["path_file"],
    )


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


def get_all():
    try:
        signs = db.signs.find({})
        list_signs = [build_sign(sign) for sign in signs]
        if not list_signs:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"No hay señas disponibles",
            )
        return list_signs
    except PyMongoError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )


# def create(request: SignBase, current_user: CurrentUser):
#     try:
#         new_sign = dict(
#             user_email= current_user.email,
#             label=request.label,
#             fecha_creacion=datetime.now().strftime("%Y%m%d%H%M%S"),
#             fecha_modificacion=datetime.now().strftime("%Y%m%d%H%M%S"),
#         )
#         result = db.signs.insert_one(new_sign)
#         new_sign = db.signs.find_one({"_id": result.inserted_id})
#         new_sign["id"] = str(new_sign.pop("_id"))
#         return new_sign

#     except PyMongoError as e:
#         raise HTTPException(
#             status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
#         )

def create(metadata: CreateSign, current_user: CurrentUser, file: UploadFile):
    try:
        user_info = db.users.find_one({"email": current_user["email"]})
        new_sign = dict(
            label=metadata["label"],
            creation_date=datetime.now().strftime("%Y%m%d%H%M%S"),
            role_user=user_info["role"],
            upload_by=user_info["name"],
            path_file="",
        )
        result_create = db.signs.insert_one(new_sign)
        new_sign = db.signs.find_one({"_id": result_create.inserted_id})
        id_sign = str(new_sign.pop("_id"))

        new_file_to_upload = rename_file(id_sign, file)
        print("File Info:", new_file_to_upload.filename,
              new_file_to_upload.content_type)
        file_uploaded = upload_file(new_file_to_upload)
        print(file_uploaded)
        update_sign = db.signs.update_one({"_id": ObjectId(id_sign)}, {
                                          "$set": {"path_file": file_uploaded["saved_location"]}})
        if not update_sign.modified_count:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail=f"Seña con id {id_sign} no encontrada"
            )
    except PyMongoError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )


def rename_file(file_name: str, file: UploadFile) -> UploadFile:
    try:
        file.filename = file_name + ".mp4"
        return file
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error al renombrar el archivo"
        )


# def upload_file(file_id, file, current_user):
#     user_email = current_user.email
#     try:
#         img_path = f"./data/{user_email}/"
#         try:
#             os.mkdir(img_path)
#         except:
#             pass
#         contents = file.file.read()
#         img_name = datetime.now().strftime("%Y%m%d%H%M%S")
#         with open(img_path + f"{img_name}.jpg", "wb") as f:
#             f.write(contents)
#     except Exception:
#         return {"message": "There was an error uploading the file"}
#     finally:
#         file.file.close()
#     db.logs.insert_one(
#         dict(
#             type_event="file_uploaded",
#             date=datetime.now().strftime("%Y%m%d%H%M%S"),
#             description=f"El usuario creó una seña: {img_name}",
#             user=user_email,
#         )
#     )
#    return {"message": f"Successfully uploaded {file.filename}"}


def upload_file(file: UploadFile):
    UPLOAD_FOLDER = "storage/videos"

    try:
        # Obtener la extensión del tipo de contenido
        file_extension = mimetypes.guess_extension(file.content_type)

        if not file_extension:
            # Si no se puede determinar la extensión del tipo de contenido, intentar extraer la extensión del nombre del archivo
            file_extension = os.path.splitext(file.filename)[1]

    # Verificar si la extensión ya está presente en el nombre del archivo
        if not file.filename.endswith(file_extension):
            # Generar la ruta completa de destino
            file_location = os.path.join(
                UPLOAD_FOLDER, file.filename + file_extension)
        else:
            # Utilizar el nombre del archivo sin modificar
            file_location = os.path.join(UPLOAD_FOLDER, file.filename)

        with open(file_location, "wb") as file_object:
            # Guardar el archivo en la carpeta especificada
            shutil.copyfileobj(file.file, file_object)

        return {"filename": file.filename, "saved_location": file_location}

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error al subir el archivo"
        )


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
