import json
import os
from fastapi import APIRouter, Depends, File, Form, HTTPException, Response, UploadFile
from schemas.user import CurrentUser
from security import oauth2
from schemas.model import *
from functions import models
from fastapi.responses import FileResponse
from os import getcwd

from fastapi_pagination import add_pagination, paginate
from fastapi_pagination.links import Page


router = APIRouter(prefix="/model", tags=["Models"])


@router.post("/", status_code=201)
def create_model(metadata: str = Form(...), file: UploadFile = File(...)):
    metadata = json.loads(metadata)
    create_model: ModelBase = {
        "name": metadata["name"],
        "description": metadata["description"],
        "category": metadata["category"],
        "key_words": metadata["key_words"],
        "precision": metadata["precision"],
        "sensitivity": metadata["sensitivity"],
        "specificity": metadata["specificity"],
        "f1_score": metadata["f1_score"],
        "roc_auc": metadata["roc_auc"],
        "version": metadata["version"],
        "notes_version": metadata["notes_version"],
        "state_investigation": metadata["state_investigation"],
        "comments": metadata["comments"],
        "created_by": "",
    }
    return models.create(create_model, file)


@router.get("/file/{id}", status_code=200)
def find_filemodel(id: str):
    current_directory = getcwd() + "/storage/models/"
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
    }
    try:
        files = os.listdir(current_directory)
        file_exist = False
        for file in files:
            file_name = file.split(".")[0]
            if file_name == id:
                file_exist = True
                extension = file.split(".")[-1]
                break
        if not file_exist:
            raise HTTPException(status_code=404, detail="File not found")
        file_path = current_directory + id + "." + extension
        return FileResponse(file_path, headers=headers)
    except Exception as e:
        return Response(content=str(e), status_code=500)


@router.get("/", response_model=Page[ShowModel], status_code=200)
def find_all_models():
    list_models = models.find_all()
    return paginate(list_models)


add_pagination(router)
