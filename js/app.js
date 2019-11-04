function validar(){
    var email, clave, expresion;
    email = document.getElementById("email").value;
    clave = document.getElementById("clave").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(email == "" || clave=="" || clave2==""){
        alert("Completa todos los campos")
        return false;
    }

    else if(!expresion.test(email)){
        alert("El correo no es válido")
        return false;
    }
    
    else if(email.length>80){
        alert("El correo es muy largo");
        return false;
    }

    else if(clave.length>80){
        alert("La clave solo puede tener 20 dígitos como máximo");
        return false;
    }

    else if(clave2.length>80){
        alert("La clave solo puede tener 20 dígitos como máximo");
        return false;
    }

    else if(clave != clave2){
        alert("Las contraseñas no coinciden");
        clave.value = "";
        clave2.value = "";
    }



}