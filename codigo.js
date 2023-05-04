var Encriptar = document.getElementById("encriptar");
var Desencriptar = document.getElementById("desencriptar");

Encriptar.addEventListener("click", function{
    //variable que almacena el texto a encriptar
    var cadenaInicial = document.getElementById("text").Value;
    if (validar(cadenaInicial)) {
        encriptar(cadenaInicial);
    }
});

Desencriptar.addEventListener("click", function{
    //variable que almacena el texto a desencriptar
    var cadenaInicial = document.getElementById("text").Value;
    if (validar(cadenaInicial)) {
        desencriptar(cadenaInicial);
    }
});



// llamado al metodo de validacion
validar(cadenaInicial);
var cadenaFinal;


//realiza la validacion de existencia de numero, mayusculas o caracteres especiales en la cadena
function validar(cadenaInicial) {
    //regx contiene la cadena buscada en el la cadena a encriptar
    var regx = /[A-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~\u00A1-\uFFFF]/;

    if (regx.test(cadenaInicial)) {
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
}
//realiaza la desencriptacion de la cadena
function desencriptar(cadenaInicial) {
    cadenaInicial = cadenaInicial.replace(/ai/g, "a");
    console.log(cadenaInicial);
    cadenaInicial = cadenaInicial.replace(/enter/g, "e");
    console.log(cadenaInicial);
    cadenaInicial = cadenaInicial.replace(/imes/g, "i");
    console.log(cadenaInicial);
    cadenaInicial = cadenaInicial.replace(/ober/g, "o");
    console.log(cadenaInicial);
    cadenaInicial = cadenaInicial.replace(/ufat/g, "u");
    console.log(cadenaInicial);
}