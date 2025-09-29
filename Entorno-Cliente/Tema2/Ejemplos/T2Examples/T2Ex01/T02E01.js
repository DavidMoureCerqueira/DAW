function probarVariables(){
    //var:ambito de funcion
    var x="var: Ambito de funcion";
    if(true){
        var x="var: Ambito funcion if";
    }
    if(true){
        let y="let: Ambito de bloque";
        console.log(y);
        
    }
    // console.log(y);                      // Da error porque esta variable fuera de bloque if no existe
    const z="const: No se puede reasignar"
    console.log(z);
    // z= "Nuevo valor";                    //Da error porque no es posible redefinir una constante
    var x= "Nueva asignacion";
    let y= "Nueva asignacion con let";
    // let y= "Otra nueva asignacion"       //No se puede redeclarar con let dos veces seguidas una misma variable


}
probarVariables();