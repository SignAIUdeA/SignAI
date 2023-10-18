from fastapi import APIRouter, Depends
from security import oauth2
from schemas.model import *
from functions import models

router = APIRouter(prefix="/model", tags=["Models"])


@router.post("/", response_model=ModelBase, status_code=201)
def create_model(request: ModelBase):
    return models.create(request)
