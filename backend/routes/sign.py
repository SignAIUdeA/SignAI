import json
from typing import List
from fastapi import APIRouter, Depends, status, File, UploadFile, Form
from schemas.sign import *
from schemas.user import CurrentUser
from functions import sign
from security import oauth2

from fastapi_pagination import add_pagination, paginate
from fastapi_pagination.links import Page

router = APIRouter(prefix="/signs", tags=["Signs"])


@router.get("/data-analysis", status_code=200)
def get_data_analysis():
    return sign.data_analysis()


@router.get("/all", response_model=Page[ShowSign], status_code=status.HTTP_200_OK)
def get_all_signs():
    list_signs = sign.get_all()
    return paginate(list_signs)


@router.get("/{id}", response_model=ShowSign, status_code=status.HTTP_200_OK)
def get_sign(
    id: str,
    current_user: CurrentUser = Depends(oauth2.get_current_user),
):
    return sign.show(id, current_user)


@router.post("/", status_code=status.HTTP_201_CREATED)
def create_sign_and_upload_file(metadata: str = Form(...), file: UploadFile = File(...), current_user: CurrentUser = Depends(oauth2.get_current_user)):
    metadata = json.loads(metadata)
    create_sign: CreateSign = {
        "label": metadata["label"],
    }
    return sign.create(create_sign, current_user, file)


@router.put("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def update_sign(
    id: str,
    request: EditSign,
):
    return sign.update_label(id, request.label)


@router.put("/approve/{id}", status_code=status.HTTP_204_NO_CONTENT)
def approve_sign(
    id: str
):
    print(id)
    return sign.approve_sign(id)


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_sign(
    id: str,
    current_user: CurrentUser = Depends(oauth2.get_current_user),
):
    return sign.delete(id, current_user)


add_pagination(router)
