from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

class LogBase(BaseModel):
    user: str
    type_event: str
    descripcion: str
    fecha_creacion: datetime

    class Config:
        orm_mode = True
