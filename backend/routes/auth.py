from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from functions import auth
from schemas.auth import *


router = APIRouter(tags=["Authentication"], prefix="/auth")


@router.post("/login", response_model=Token)
def login(request: Login):#:schemas.Login
    return auth.login(request)


