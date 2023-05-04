//variable que almacena el texto a encriptar
var cadenaInicial = prompt("ingrese su cadena de texto");
// llamado al metodo de validacion
validar(cadenaInicial);
var cadenaFinal;


//realiza la validacion de existencia de numero, mayusculas o caracteres especiales en la cadena
function validar(cadenaInicial) {
    //regx contiene la cadena buscada en el la cadena a encriptar
    var regx = /[A-Z|0-9]/;

    if (regx.test(cadenaInicial)) {
        alert("Su texto es invalido porfavor revise que no contenga Mayusculas o numeros");
    } else {
        encriptar(cadenaInicial);
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
}