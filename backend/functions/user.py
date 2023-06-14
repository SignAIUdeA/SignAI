from fastapi import HTTPException, status
from pymongo.errors import PyMongoError
from schemas.user import *
from db.mongo import db
from security.hashing import Hash


def create(request: CreateUser):
    if db.users.find_one({"email": request.email}):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Email { request.email} already exist",
        )
    try:
        new_user = dict(
            name=request.name,
            email=request.email,
            password=Hash.bcrypt(request.password),
            fecha_creacion=datetime.now().strftime("%Y%m%d%H%M%S"),
            fecha_modificacion=datetime.now().strftime("%Y%m%d%H%M%S"),
            role="user",
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
