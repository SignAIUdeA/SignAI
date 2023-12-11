from fastapi import APIRouter, Depends
from security import oauth2
from schemas.user import *
from functions import user

from fastapi_pagination import add_pagination, paginate
from fastapi_pagination.links import Page

router = APIRouter(prefix="/user", tags=["Users"])


@router.post("/", response_model=ShowUser, status_code=201)
def create_user(request: CreateUser):
    return user.create(request)


@router.get("/", response_model=ShowUser, status_code=200)
def get_user(current_user: CurrentUser = Depends(oauth2.get_current_user)):
    return user.show(current_user)


@router.get("/all", response_model=Page[UserAllInfomation], status_code=200)
def get_all_users():
    list_users = user.show_all_users()
    return paginate(list_users)


@router.get("/{id}", response_model=UserAllInfomation, status_code=200)
def get_user_by_id(id):
    return user.found_user(id)


@router.put("/", response_model=ShowUser, status_code=200)
def update_user(request: EditUser, current_user: CurrentUser = Depends(oauth2.get_current_user)):
    return user.update(current_user, request)


@router.put("/update-credentials", status_code=204)
def update_user_credentials(request: EditCredentials, current_user: CurrentUser = Depends(oauth2.get_current_user)):
    return user.update_credentials(current_user, request)


@router.delete("/", status_code=204)
def delete_user(current_user: CurrentUser = Depends(oauth2.get_current_user)):
    return user.delete(current_user)


@router.delete("/{id}", status_code=204)
def delete_user_by_id(id):
    return user.delete_user(id)


add_pagination(router)
