function validar(){
    var email, clave, expresion;
    email = document.getElementById("email").value;
    clave = document.getElementById("clave").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(email == "" || clave=="" || clave2=="" || twitter=="" || facebook=="" || google=="" || nombre=="" || apellido=="" || numero=="" || direccion==""){
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

function validar_clave() {
        var caract_invalido = " ";
        var caract_longitud = 40;
        var cla1 = document.registro.clave.value;
        var cla2 = document.registro.clave2.value;
        if (cla1 == '' || cla2 == '') {
            alert('Debes introducir tu clave en los dos campos.');
            document.registro
            return false;
        }   
        if (document.registro.clave.value.length < caract_longitud) {
            alert('Tu clave debe constar de ' + caract_longitud + ' caracteres.');
            document.registro
            return false;
        }
        if (document.registro.clave.value.indexOf(caract_invalido) > -1) {
            alert("Las claves no pueden contener espacios");
            document.registro
            return false;
        }
        else {
            if (cla1 != cla2) {
                alert ("Las claves introducidas no son iguales");
                document.registro
                return false;
            }
            else {
                alert('Contraeña correcta');
                document.registro.submit;
                return true;
            }
        }
    }


