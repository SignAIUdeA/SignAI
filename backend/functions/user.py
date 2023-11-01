from fastapi import HTTPException, status
from pymongo.errors import PyMongoError
from schemas.user import *
from db.mongo import db
from security.hashing import Hash
from functions.validations.validations import *


def build_user(user) -> UserAllInfomation:
    return UserAllInfomation(
        id=str(user["_id"]),
        name=user["name"],
        email=user["email"],
        creation_date=user["creation_date"],
        modification_data=user["modification_data"],
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
