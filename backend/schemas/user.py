from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime
from .sign import ShowSign as Sign


class UserBase(BaseModel):
    name: str
    email: str
    password: str
    fecha_creacion: datetime
    fecha_modificacion: datetime
    role: str
    signs: List[Sign]
    
    class Config:
        orm_mode = True


class CurrentUser(BaseModel):
    role: str
    email: str 

class CreateUser(BaseModel):
    name: str
    email: str
    password: str
    
class ShowUser(BaseModel):
    name: str
    email: str
    signs: List[Sign] = []

class EditUser(BaseModel):
    name: str
    email: str
    role: str
    fecha_modificacion: datetime
    signs: List[Sign] = []