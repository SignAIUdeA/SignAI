from fastapi import APIRouter, Depends
from security import oauth2
from schemas.user import *
from functions import user

router = APIRouter(prefix="/user", tags=["Users"])


@router.post("/", response_model=ShowUser, status_code=201)
def create_user(request: CreateUser):
    return user.create(request)


@router.get("/", response_model=ShowUser, status_code=200 )
def get_user(current_user: CurrentUser = Depends(oauth2.get_current_user)):
    return user.show(current_user)


@router.put("/", response_model=ShowUser, status_code=200)
def update_user(request: EditUser, current_user: CurrentUser = Depends(oauth2.get_current_user)):
    return user.update(current_user, request)


@router.delete("/", status_code=204)
def delete_user(current_user: CurrentUser = Depends(oauth2.get_current_user)):
    return user.delete(current_user)