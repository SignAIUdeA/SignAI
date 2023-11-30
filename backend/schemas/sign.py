from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime


class SignBase(BaseModel):
    path_file: str
    label: str
    creation_date: datetime
    role_user: str
    upload_by: str

    class Config:
        orm_mode = True


class CreateSign(BaseModel):
    label: str


class ShowSign(BaseModel):
    id: str
    path_file: str
    label: str
    creation_date: datetime
    role_user: str
    upload_by: str


class EditSign(BaseModel):
    label: str
    fecha_modificacion: datetime
