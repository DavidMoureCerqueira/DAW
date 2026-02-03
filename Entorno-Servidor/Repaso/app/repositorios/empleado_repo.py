from app.database.db import db

def guardar_empleado_repo(empleado):

    db.session.add(empleado)
    db.session.commit()

def comprobar_empleado_repo():
    pass
