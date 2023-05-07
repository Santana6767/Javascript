
///tipo de dato BOOLEAN

let variableBooleana;

variableBooleana = true;

////variableBooleana = flase;


////Sintasis condicional - if

/* if (CONDICION) {

    ////bloque de codigo

}*/

if (variableBooleana) {
    console.log('El usuario esta logeado!');

}

console.log('resto del codigo....');

////COMPARADORES
/**
 * == igual
 * === estrictamente igual
 * != distinto
 * !== estrictamente distinto
 * >= > <= <
 */

let numerito1;
let numerito2;
let numerito3;

numerito1 = 7;
numerito2 = 8;

resultado = (numerito1 == numerito2);

console.log('numerito1==numerito2? : ' + resultado)

////ejemplo con logeo fr usuario

contrasena = prompt('Ingrese su contrasena');

if (contrasena === 'pepe1234') 
{
    console.log('contrasena correcta!!');
}


let edad;

edad = parseInt(prompt('Ingrese su edad'));

if (edad >= 18)
{
    console.log('Ingresando a la plataforma de bebidas alcholicas');
} else {
    console.log('Lamentablemente no tiene edad suficiente para ingresar a la plataforma');
}