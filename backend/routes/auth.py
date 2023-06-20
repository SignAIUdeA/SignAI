from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from functions import auth
from schemas.auth import (Token, Login)


router = APIRouter(tags=["Authentication"], prefix="/auth")


@router.post("/login", response_model=Token)
def login(request: OAuth2PasswordRequestForm = Depends()):  # :Login
    return auth.login(request)
