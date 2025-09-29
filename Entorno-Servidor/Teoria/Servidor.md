
# Flask

Funciona a traves del WSGI --> Hace comunicacion entre el servidor y Python, lo hace Flask

Flask--> Es un microframework solo nos da el servicio de un servicio web, para mas habria que usar mas frameworks, hay extensiones de flask

Se configura en un puerto y va atender a todas las peticiones contra ese puerto.

Se utiliza con entorno virtual: python  -m venv .venv (para hacerlo oculto el .)

para instalar librerias se usa pip--> si se pone sin mas instala a nivel global.

Si lo pudieramos activar antes de la linea en la consola pondria (venv)

Alternativa-->

.\.venv\Scripts\pip.exe install flask

en casa utilizar el activate porque funcionara

En Scripts vana a estar todas las librerias que instala flask --> Sale de pypi.org

.\.venv\Scripts\flask.exe --version da las versiones y le pongo la ruta para que este instalado solo en el -venv

pip freeze --> Si queremos comprobar todos los paquetes instalados de Python en nuestro entorno virtual podemos ejecutar lo siguiente:

 .\.venv\Scripts\pip.exe freeze
 .\.venv\Scripts\pip.exe freeze > requirements.txt se vuelva a un archivo .txt
 .\.venv\Scripts\pip.exe pip install -r .\requirements.txt instalaria las librerias