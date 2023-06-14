from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

class SignBase(BaseModel):
    label: str
    fecha_creacion: datetime
    fecha_modificacion: datetime

    class Config:
        orm_mode = True

class ShowSign(BaseModel):
    label: str
    fecha_creacion: datetime
    fecha_modificacion: datetime


class EditSign(BaseModel):
    label: str
    fecha_modificacion: datetime
