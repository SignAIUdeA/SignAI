
from schemas.auth import Login
from fastapi import status, HTTPException, Depends
from db.mongo import db
from security.jwt import create_access_token
from security.hashing import Hash
from datetime import datetime


def login(request: Login):
    user = db.users.find_one({"email": request.username})
    user["id"] = str(user.pop("_id"))
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Invalid Credentials"
        )
    if not Hash.verify(user["password"], request.password):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Incorrect password"
        )

    db.logs.insert_one(
        dict(
            type_event="login",
            description="Inicio de sesión en el sistema",
            user=user["email"],
            fecha_creacion=datetime.now().strftime("%Y%m%d%H%M%S"),
        )
    )
    access_token = create_access_token(
        {"email": user["email"], "role": user["role"], "idUser": user["id"]}
    )
    return {"access_token": access_token, "token_type": "bearer"}
