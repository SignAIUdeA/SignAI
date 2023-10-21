from schemas.model import *
from db.mongo import db
from pymongo.errors import PyMongoError
from fastapi import HTTPException, status


def build_model(model) -> ModelBase:
    return ModelBase(
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


def create(request: ModelBase):
    try:
        new_model = dict(
            name=request.name,
            description=request.description,
            category=request.category,
            key_words=request.key_words,
            precision=request.precision,
            sensitivity=request.sensitivity,
            specificity=request.specificity,
            f1_score=request.f1_score,
            roc_auc=request.roc_auc,
            version=request.version,
            notes_version=request.notes_version,
            state_investigation=request.state_investigation,
            comments=request.comments,
            creation_date=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
            created_by=request.created_by
        )

        result = db.models.insert_one(new_model)
        new_model = db.models.find_one({"_id": result.inserted_id})

        return new_model
    except PyMongoError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )
