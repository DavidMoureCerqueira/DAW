from flask import Flask, render_template, request, flash, redirect
from models import db, Curso
from services import UniversidadService
from repositories import UniversidadRepository

app = Flask(__name__)
app.secret_key = 'clave_examen'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///examen.db'
app.config['SQLALCHEMY_ECHO'] = True  # Muestra el SQL en consola

db.init_app(app)


@app.route('/')
def index():
    cursos = UniversidadService.listar_cursos_activos()
    return render_template('index.html', cursos=cursos)


@app.route('/test-crear', methods=['POST'])
def test_crear():
    cursos=[
        {"nombre": "DAM",
            "activo":True
        },
        {"nombre": "DAF",
            "activo":False
        },
        {"nombre": "RIT",
            "activo":True
        },
        {"nombre": "MAM",
            "activo":False
        },
        {"nombre": "CAP",
            "activo":True
        },
    ]
    
    
    try:
        curso_id_raw = request.form.get('curso_id')

        curso_id = int(curso_id_raw) if curso_id_raw else None

        alumno = UniversidadService.crear_alumno(
            request.form['nombre'],
            20,
            request.form['email'],
            curso_id
        )
        UniversidadService.añadir_lista_cursos(cursos)
        print(alumno)
    except Exception as e:
        flash(str(e))
    return redirect('/')


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        # Seed inicial de prueba si la tabla está vacía
        if not db.session.get(Curso, 1):
            db.session.add(Curso(nombre="DAW", activo=True))
            db.session.add(Curso(nombre="ASIR", activo=False))
            db.session.commit()
    app.run(debug=True)
