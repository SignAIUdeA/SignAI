from sqlalchemy import Column, Integer, String, ForeignKey, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
Base = declarative_base()


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
    role = Column(String)
    location = Column(String)
    documentId = Column(String)
    university = Column(String)

    signs = relationship("Sign", back_populates="creator")
    logs = relationship("Log", back_populates="creator")


class Sign(Base):
    __tablename__ = "signs"

    id = Column(Integer, primary_key=True, index=True)
    user_email = Column(String, ForeignKey("users.id"))
    label = Column(String)
    fecha_creacion = Column(Date)
    fecha_modificacion = Column(Date)

    creator = relationship("User", back_populates="signs")


class Log(Base):
    __tablename__ = "logs"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, ForeignKey("users.id"))
    description = Column(String)
    type_event = Column(String)
    date = Column(Date)
    user = Column(String)

    creator = relationship("User", back_populates="logs")


class Model(Base):
    __tablename__ = "models"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    category = Column(String)
    key_words = Column(String)
    precision = Column(String)
    sensitivity = Column(String)
    specificity = Column(String)
    f1_score = Column(String)
    roc_auc = Column(String)
    version = Column(String)
    notes_version = Column(String)
    state_investigation = Column(String)
    comments = Column(String)
    creation_date = Column(Date)
    created_by = Column(String)
