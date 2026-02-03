from models import Alumno_already_exists_excepcion, db, Alumno, Curso
from repositories import UniversidadRepository, AlumnoRepository

class UniversidadService:
    def crear_alumno(nombre,edad,email,curso_id):
        alumno=AlumnoRepository.buscar_alumno_por_nombre(nombre)
        print(alumno)        
        if alumno:
            raise Alumno_already_exists_excepcion
        alumno=AlumnoRepository.guardar_alumno(Alumno(nombre=nombre,edad=edad,email=email,curso_id=curso_id))
        return alumno
    
    def listar_cursos_activos():
        cursos= UniversidadRepository.get_cursos_activos()
        if cursos is None:
            return []
        return cursos

