from fastapi import FastAPI
from routes import auth, sign, user, models
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(sign.router)
app.include_router(user.router)
app.include_router(models.router)

##! [] crate token persistance change on login
