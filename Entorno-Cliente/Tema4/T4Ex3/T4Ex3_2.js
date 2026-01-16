// EJEMPLO FREEZE QUE VA A ENTRAR EN EL EXAMEN

try {
    const user = {
        nome: "Brais",
        idade: 24,
        enderezo: { rua: "Rua Caballeros", numero: 123, piso: 2, cidade: "A Coruña" },
        nacionalidad: "Española"
    };
    const usuario = Object.freeze(user);
    usuario.idade = 25;
    usuario.enderezo.cidade = "Oleiros";
    usuario.novaPropiedades = "Valor";
    console.log(usuario, usuario.enderezo)
} catch (e) {
    console.error("Erro capturando: " + e.message)
}

// FIJARSE QUE NO HACE EL CAMBIO, NO DA ERROR, PERO SI CAMBIA EL DEL OBJETO INTERIOR, EN EL MODO ESTRICTO HACE EL CAMBIO EL OBJETO INTERIOR PERO EL RESTO DE CAMBIOS DA ERROR
