# Para formulario
 Hacer una vista Home con una plantilla render_template("")
 extends
 block content
 Donde meto el formulario
 form--> Method=Get/post --> Get esta los datos en la url y post esta en el cuerpo del http y action--> a donde enviamos esos datos /lo que sea
 GET RECIBE POST MANIPULA
 utilizar request para traducir la información--> if request.method=="get" que escriba la plantilla, y con post hacer que se registre, user= password=
 en la ruta route("/", methods=("GET,"POST","PUTS","DELETE"))
-label
-input usuario importante el name
-input contraseña
Botón para enviar el formulario al servidor (type='submit)
Controlar formulario


si el usuario es valido usar redirect, mostrar errores para validar la pw

cuando se envie, recibir el user en la ruta, request.args.get("")