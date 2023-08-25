from typing import List
from fastapi import APIRouter, Depends, status, File, UploadFile
from schemas.sign import *
from schemas.user import CurrentUser
from functions import sign
from security import oauth2

router = APIRouter(prefix="/signs", tags=["Signs"])


@router.get("/{id}", response_model=ShowSign, status_code=status.HTTP_200_OK)
def get_sign(
    id: str,
    current_user: CurrentUser = Depends(oauth2.get_current_user),
):
    return sign.show(id, current_user)


@router.get("/", response_model=List[ShowSign], status_code=status.HTTP_200_OK)
def get_all_signs(current_user: CurrentUser = Depends(oauth2.get_current_user)):
    return sign.get_all(current_user.email)


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=ShowSign)
def create_sign_and_upload_file(
    request: SignBase,
    file: UploadFile = File(...),
    current_user: CurrentUser = Depends(oauth2.get_current_user),
):
    created_sign = sign.create(request, current_user)
    sign_id = created_sign.id
    sign.upload_file(sign_id, file, current_user)
    return sign.show(sign_id)       


@router.put("/{id}", response_model=ShowSign, status_code=status.HTTP_200_OK)
def update_sign(
    id: str,
    request: EditSign,
    current_user: CurrentUser = Depends(oauth2.get_current_user),
):
    return sign.update(id, request, current_user)


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_sign(
    id: str,
    current_user: CurrentUser = Depends(oauth2.get_current_user),
):
    return sign.delete(id, current_user)
