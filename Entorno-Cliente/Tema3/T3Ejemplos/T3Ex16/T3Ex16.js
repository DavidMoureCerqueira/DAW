let promesa=new Promise((resolve,reject)=>{
    let resultado=Math.round(Math.random());
    if (resultado){
        resolve("Operacion correcta");
    }else{
        reject("Se produjo un error en la operacion")
    }
})
