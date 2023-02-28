function validar_ingreso() {
    var user, password;
    user = document.getElementById('usuario').value;
    password = document.getElementById('contraseña').value;
    
    if (user === 'yair' && password === '1234') {
        window.location = "./bienvenido.html";
    } 
    else {
        console.log('Ingrese nuevo usuario o contraseña');
    }
}

validar_ingreso();