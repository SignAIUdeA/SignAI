from bson import ObjectId
from schemas.model import *
from db.mongo import db
from pymongo.errors import PyMongoError
from fastapi import HTTPException, UploadFile, status
import os
import shutil
import mimetypes


def build_model(model) -> ShowModel:
    return ShowModel(
        id=str(model["_id"]),
        name=model["name"],
        description=model["description"],
        category=model["category"],
        key_words=model["key_words"],
        precision=model["precision"],
        sensitivity=model["sensitivity"],
        specificity=model["specificity"],
        f1_score=model["f1_score"],
        roc_auc=model["roc_auc"],
        version=model["version"],
        notes_version=model["notes_version"],
        state_investigation=model["state_investigation"],
        comments=model["comments"],
        created_by=model["created_by"],
        creation_date=model["creation_date"]
    )


def find_all():
    try:
        models = db.models.find({})
        models_list = [build_model(model) for model in models]
        return models_list
    except PyMongoError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )


def create(request: ModelBase, file: UploadFile):
    try:
        new_model = dict(
            name=request["name"],
            description=request["description"],
            category=request["category"],
            key_words=request["key_words"],
            precision=request["precision"],
            sensitivity=request["sensitivity"],
            specificity=request["specificity"],
            f1_score=request["f1_score"],
            roc_auc=request["roc_auc"],
            version=request["version"],
            notes_version=request["notes_version"],
            state_investigation=request["state_investigation"],
            comments=request["comments"],
            creation_date=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
            created_by=request["created_by"]
        )

        result = db.models.insert_one(new_model)
        new_model = db.models.find_one({"_id": result.inserted_id})
        id_model = str(new_model.pop("_id"))
        new_file_to_upload = rename_file(id_model, file)

        upload_file(new_file_to_upload)

        return new_model
    except PyMongoError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )


def rename_file(file_name: str, file: UploadFile) -> UploadFile:
    try:
        extension = file.filename.split(".")[-1]
        file.filename = file_name + "." + extension
        return file
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error al renombrar el archivo"
        )


def upload_file(file: UploadFile):
    UPLOAD_FOLDER = "storage/models"

    try:
        # Obtener la extensión del tipo de contenido
        file_extension = mimetypes.guess_extension(file.content_type)

        if not file_extension:
            # Si no se puede determinar la extensión del tipo de contenido, intentar extraer la extensión del nombre del archivo
            file_extension = os.path.splitext(file.filename)[1]

    # Verificar si la extensión ya está presente en el nombre del archivo
        if not file.filename.endswith(file_extension):
            # Generar la ruta completa de destino
            file_location = os.path.join(
                UPLOAD_FOLDER, file.filename + file_extension)
        else:
            # Utilizar el nombre del archivo sin modificar
            file_location = os.path.join(UPLOAD_FOLDER, file.filename)

        with open(file_location, "wb") as file_object:
            # Guardar el archivo en la carpeta especificada
            shutil.copyfileobj(file.file, file_object)

        return {"filename": file.filename, "saved_location": file_location}

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error al subir el archivo"
        )
