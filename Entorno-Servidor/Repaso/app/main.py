import os
from flask import Flask, current_app
from flask_sqlalchemy import SQLAlchemy
from app.database.db import db
from app.servicios.servicio import guardarEmpleado
from app.models.Empleado import Empleado
app = Flask(__name__)

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DB_PATH = os.path.join(BASE_DIR, "data", "test.db")
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_PATH}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

@app.cli.command("crear-tablas")
def crear_tablas():
    db.drop_all()
    print("Creando estructura de base de datos...")
    db.create_all()
    print("Base de datos creada correctamente")

@app.cli.command("test")
def poblar_tabla():
    from app.models.Empleado import Empleado
    from app.database.db import db
    from app.servicios.servicio import guardarEmpleado
    empleado_nuevo=Empleado(nombre="David",apellido="Moure",contratado=False)
    with current_app.app_context():
        guardarEmpleado(empleado_nuevo)
        print("Empleado guardado")