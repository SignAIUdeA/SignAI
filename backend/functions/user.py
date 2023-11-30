from fastapi import HTTPException, status
from pymongo.errors import PyMongoError
from schemas.user import *
from db.mongo import db
from security.hashing import Hash
from functions.validations.validations import *
from bson import ObjectId


def build_user(user) -> UserAllInfomation:
    return UserAllInfomation(
        id=str(user["_id"]),
        name=user["name"],
        email=user["email"],
        creation_date=datetime.strptime(
            user["creation_date"], "%Y%m%d%H%M%S").strftime("%Y-%m-%d %H:%M:%S"),
        modification_data=datetime.strptime(
            user["modification_data"], "%Y%m%d%H%M%S").strftime("%Y-%m-%d %H:%M:%S"),
        role=user["role"],
        location=user["location"],
        documentId=user["documentId"],
        university=user["university"],
    )


def create(request: CreateUser):

    if db.users.find_one({"email": request.email}):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"El email { request.email} ya existe",
        )
    if not (is_valid_role(role=request.role)):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"El rol {request.role} no es valido"
        )
    if not (is_valid_email(email=request.email)):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"El email {request.email} no es correcto"
        )
    if not (is_valid_document(document=request.documentId)):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"El número de documento solo debe contener números"
        )
    try:
        new_user = dict(
            name=request.name,
            email=request.email,
            password=Hash.bcrypt(request.documentId),
            role=request.role,
            location=request.location,
            documentId=request.documentId,
            university=request.university,
            creation_date=datetime.now().strftime("%Y%m%d%H%M%S"),
            modification_data=datetime.now().strftime("%Y%m%d%H%M%S"),
            signs=[],
        )
        result = db.users.insert_one(new_user)
        new_user = db.users.find_one({"_id": result.inserted_id})

        db.logs.insert_one(
            dict(
                type_event="create_user",
                description="Creación de usuario nuevo en el sistema",
                user=new_user["email"],
                fecha_creacion=datetime.now().strftime("%Y%m%d%H%M%S"),
            )
        )
        return new_user
    except PyMongoError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )


def show(current_user: CurrentUser):
    try:
        user = db.users.find_one({"email": current_user['email']})
        if not user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"User with the email {current_user['email']} is not available",
            )
        return ShowUser(**user)
    except PyMongoError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )


def show_all_users():
    try:
        users = db.users.find({})
        list_users = [build_user(user) for user in users]
        if not users:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Users are not available",
            )
        return list_users
    except PyMongoError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )


def update_credentials(current_user: CurrentUser, request: EditCredentials):
    try:
        user = db.users.find_one({"email": current_user['email']})
        if not user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"User with the email {current_user['email']} is not available",
            )
        new_password = Hash.bcrypt(request.new_password)
        updated_user = db.users.update_one(
            {"email": current_user["email"]}, {"$set": {"password": new_password}})

        if updated_user.modified_count == 0:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error updating password"
            )
        return None
    except PyMongoError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )


def delete_user(id):
    try:
        user = db.users.find_one({"_id": ObjectId(id)})
        if not user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Usuario con el {id} no encontrado",
            )
        print(user)
        result = db.users.delete_one({"_id": ObjectId(id)})
        if result.deleted_count == 0:
            raise HTTPException(
                status_code=500, detail="Error deleting user")
        return None
    except PyMongoError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )


def found_user(id):
    try:
        user_found = db.users.find_one({"_id": ObjectId(id)})
        user = build_user(user_found)
        if not user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Usuario con el {id} no encontrado",
            )
        return user
    except PyMongoError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )
