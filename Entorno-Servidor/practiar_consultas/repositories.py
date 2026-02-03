from models import Alumno, Curso
from models import db

class UniversidadRepository:

    def get_cursos_activos():
        cursos=Curso.query.filter_by(Curso.activo==True).all()
        return cursos
    def añadir_cursos():
        
        
        pass


class AlumnoRepository:

    def buscar_alumno_por_nombre(nombre):
        alumno = Alumno.query.filter(Alumno.nombre == nombre).first()
        return alumno

    def guardar_alumno(alumno):
        db.session.add(alumno)
        db.session.commit()
        return alumno
