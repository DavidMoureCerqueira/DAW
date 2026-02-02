from sqlalchemy import Boolean, Column, Integer, String
from app.database.db import db


class Empleado(db.Model):
    __tablename__ = "empleado"
    id = Column(Integer, primary_key=True)
    nombre=Column(String(100), unique=True,nullable=False)
    apellido=Column(String(100))
    contratado=Column(Boolean, default=False)

