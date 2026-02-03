from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import Column, String, Integer, Boolean, ForeignKey

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)

class Curso(db.Model):
    __tablename__="curso"
    id=Column(Integer, primary_key=True)
    nombre=Column(String(100), unique=True)
    activo=Column(Boolean, default=False)
    alumnos=relationship("Alumno", back_populates="curso")
    
    
class Alumno(db.Model):
    __tablename__="alumno"
    id=Column(Integer, primary_key=True)
    nombre=Column(String(100), unique=True)
    edad=Column(Integer)
    email=Column(String(100), nullable=False)
    activo=Column(Boolean, default=True)
    curso_id=Column(Integer, ForeignKey(Curso.id),nullable=False)
    
    curso=relationship("Curso",back_populates="alumnos")    


class Alumno_already_exists_excepcion:
    pass