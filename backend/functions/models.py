from schemas.model import *
from db.mongo import db
from pymongo.errors import PyMongoError
from fastapi import HTTPException, status


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
