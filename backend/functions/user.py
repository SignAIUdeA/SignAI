from fastapi import HTTPException, status
from pymongo.errors import PyMongoError
from schemas.user import *
from db.mongo import db
from security.hashing import Hash


def create(request: CreateUser):

    validRoles = ["administrator", "assistant", "proffesionel"]

    if db.users.find_one({"email": request.email}):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Email { request.email} already exist",
        )
    if not (request.role in validRoles):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"The role {request.role} isn't valid"
        )
    try:
        new_user = dict(
            name=request.name,
            email=request.email,
            password=Hash.bcrypt(request.password),
            role=request.role,
            location=request.location,
            documentId=request.location,
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
