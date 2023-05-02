//variable que almacena el texto a encriptar
var cadenaInicial = prompt("ingrese su cadena de texto");
// llamado al metodo
encriptar(cadenaInicial);
var cadenaFinal;
alert(cadenaFinal);
const patron = new RegExp('^[A-Z]+$', '^[0-9]+$','\u00D1','\u00F1');
function validar(cadenaInicial){
    
}
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
                console.log("letra de la cadena :" + cadenaInicial[i]);
                cadenaFinal = cadenaFinal.replace("undefined", "");
                console.log("cadena final:" + cadenaFinal);
                break;
        }
    }
}