from fastapi import APIRouter, Depends
from security import oauth2
from schemas.model import *
from functions import models

from fastapi_pagination import add_pagination, paginate
from fastapi_pagination.links import Page


router = APIRouter(prefix="/model", tags=["Models"])


@router.post("/", response_model=ModelBase, status_code=201)
def create_model(request: ModelBase):
    return models.create(request)


@router.get("/", response_model=Page[ModelBase], status_code=200)
def find_all_models():
    list_models = models.find_all()
    return paginate(list_models)


add_pagination(router)
