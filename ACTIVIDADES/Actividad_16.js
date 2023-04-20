let numero = 1;

let numeroTexto = 'Valor desconocido';

switch(numero){
    case 1:
        numeroTexto = "Número uno";
    case 2:
        numeroTexto = "Numero dos";
    case 3:
        numeroTexto = "Numero tres";
    case 4:
        numeroTexto = "Numero cuatro";
        break;
    default:
        numeroTexto = 'Caso no encontrado';
}

console.log(numeroTexto);