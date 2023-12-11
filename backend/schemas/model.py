from pydantic import BaseModel
from typing import List
from datetime import datetime


class ModelBase(BaseModel):
    name: str
    description: str
    category: str
    key_words: List[str]
    precision: str
    sensitivity: str
    specificity: str
    f1_score: str
    roc_auc: str
    version: str
    notes_version: str
    state_investigation: str
    comments: str
    created_by: str
    creation_date: str


class ShowModel(BaseModel):
    id: str
    name: str
    description: str
    category: str
    key_words: List[str]
    precision: str
    sensitivity: str
    specificity: str
    f1_score: str
    roc_auc: str
    version: str
    notes_version: str
    state_investigation: str
    comments: str
    created_by: str
    creation_date: str
