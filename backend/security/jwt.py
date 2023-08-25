from datetime import datetime, timedelta
from jose import JWTError, jwt
from schemas.user import CurrentUser

SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def verify_token(token: str, credentials_exception):
    try:
        payload = jwt.decode(str(token), SECRET_KEY, algorithms=[ALGORITHM])
        current_user = {"email":payload.get("email"), "role":payload.get("role")}
        if current_user is None:
            raise credentials_exception
        return current_user
    except JWTError as e:
        print(e)
        raise credentials_exception


def create_access_token(token_data: CurrentUser):
    to_encode = token_data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    #jwt.decode(encoded_jwt, SECRET_KEY, algorithms=[ALGORITHM])
    return encoded_jwt
