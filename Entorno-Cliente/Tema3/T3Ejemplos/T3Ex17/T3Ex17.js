let promesa=new Promise((resolve,reject)=>{ //Codigo creador
    let resultado=Math.round(Math.random());
    if (resultado){
        resolve("Operacion correcta"); //Este es el mensaje
    }else{
        reject("Se produjo un error en la operacion") //Este es el error
    }
})

//Código consumidor
promesa
.then((mensaje)=>{ //El mensaje puede ser cualquier tipo de objeto o dato
    console.log("Exito: ",mensaje)
})
.catch((error)=>{ //Error puede ser cualquier tipo de  objeto o dato, pero deberia ser un objeto error --> Deberia ser un objeto error que podemos seleccionar
    console.log("Error", error)
})

// Los apuntes los est viendo en mdn mozilla