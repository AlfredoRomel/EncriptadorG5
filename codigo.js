//capturando informacion de la interfaz de usuario
var Encriptar = document.getElementById('Encripta');
var Desencriptar = document.getElementById('Desencripta');
var textFinal = "";
var respuesta = document.getElementById('respuesta');
var boton = "<input class='boton' onclick='copiarTexto()' id='miBoton' type='button' value='copiar'>"
var copiar = document.getElementById('miBoton');

//variables de entorno
var cadenaInicial = "";
var cadenaFinal = "";



//evento click en encriptar
Encriptar.addEventListener('click', function () {
    //variable que almacena el texto a encriptar
    cadenaInicial = document.getElementById("text").value;
    if (validar(cadenaInicial)) {
        textFinal = encriptar(cadenaInicial);
        respuesta.innerHTML = textFinal + boton;
        cadenaInicial = "";
    }
});


//evento click en desencriptar
Desencriptar.addEventListener('click', function () {
    //variable que almacena el texto a desencriptar
    cadenaInicial = document.getElementById("text").value;
    if (validar(cadenaInicial)) {
        textFinal = desencriptar(cadenaInicial);
        respuesta.innerHTML = textFinal + boton;
        cadenaInicial = "";
    }
});

//funcion que realiza la copia del text de respuesto 
function copiarTexto() {
    navigator.clipboard.writeText(textFinal)
        .catch((error) => alert(`Error al copiar el texto: ${error}`));
    cadenaInicial = "";
}




//realiza la validacion de existencia de numero, mayusculas o caracteres especiales en la cadena
function validar(cadenaInicial) {

    //regx contiene la cadena buscada en el la cadena a encriptar
    var regx = /[A-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~\u00A1-\uFFFF]/g;

    if (regx.test(cadenaInicial)) {
        respuesta.innerHTML = "<img src='Muñeco.png'><div class='mensaje'><h5>Ningun mensaje fue encontrado</h5> <h5>Ingresa el text que desees emcriptar o desenmcriptar</h5></div>"
        alert("Su texto es invalido porfavor revise que no contenga Mayusculas o numeros");
    } else {
        return true;
    }
}

// realiza la encriptacion del la cadena de texto
function encriptar(cadenaInicial) {
    for (var i = 0; i < cadenaInicial.length; i++) {
        switch (cadenaInicial[i]) {
            case "a":
                cadenaFinal = cadenaFinal + "ai";
                break;
            case "e":
                cadenaFinal = cadenaFinal + "enter";
                break;
            case "i":
                cadenaFinal = cadenaFinal + "imes";
                break;
            case "o":
                cadenaFinal = cadenaFinal + "ober";
                break;
            case "u":
                cadenaFinal = cadenaFinal + "ufat";
                break;

            default:
                cadenaFinal = cadenaFinal + cadenaInicial[i];
                cadenaFinal = cadenaFinal.replace("undefined", "");
                break;
        }
    }
    return cadenaFinal;
}
//realiaza la desencriptacion de la cadena
function desencriptar(cadenaInicial) {
    cadenaInicial = cadenaInicial.replace(/ai/g, "a");
    cadenaInicial = cadenaInicial.replace(/enter/g, "e");
    cadenaInicial = cadenaInicial.replace(/imes/g, "i");
    cadenaInicial = cadenaInicial.replace(/ober/g, "o");
    cadenaInicial = cadenaInicial.replace(/ufat/g, "u");
    return cadenaInicial;
}