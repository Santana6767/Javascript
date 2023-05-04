//Mis constantes y variables
const reparacionDeEquipo = [
    { servicio: "Reparacion de Pantallas", precio: "puede variar" },
    ///{ servicio: "Reparacion de Pantallas", precio: "puede variar" },
    ///{ servicio: "Reparacion de Pantallas", precio: "puede variar" },
    ///{ servicio: "Reparacion de Pantallas", precio: "puede variar" },
    ///{ servicio: "Reparacion de Pantallas", precio: "puede variar" },
];

const instalacionDeOS = [
    { servicio: "Instalacion de windows 7", precio: "$50" },
    { servicio: "Instalacion de windows 8", precio: "$100" },
    { servicio: "Instalacion de windows 8.1", precio: "$100" },
    { servicio: "Instalacion de windows 10", precio: "$100" },
    ///{ servicio: "Instalacion de windows 7", precio: "puede variar" },
];

const desarrolloWeb = [
    { servicio: "Diseno de Logo", precio: 300 },
    { servicio: "Diseno de Pagina Personal", precio: 850 },
    { servicio: "Diseno de Tienda Online", precio: 1700 },
    ///{ servicio: "",  precio: 300 },
    ///{ servicio: "",  precio: 900 },
];

const shop = [
    {
    producto: "Rick and Morty (Grainder)",
    info: "4/20 Friendly",
    precio: 39.99,
    },
    {
    producto: "Wave Balance",
    info: "None BlueLight",
    precio: 24.99,
    },
    {
    producto: "Gorra Azul de Cannabis",
    info: "4/20 Friendly",
    precio: 14.99,
    },
    {
    producto: "Gorra Gris de Cannabis",
    info: "4/20 Friendly",
    precio: 14.99,
    },
    {
    producto: "Ledger Nano S (Wallet for Crypto)",
    info: "Cartera Crypto",
    precio: 69.99,
    },
];
const totalProductos = reparacionDeEquipo.concat(instalacionDeOS, desarrolloWeb, shop);
let productoSeleccionado;
let carritoCompra = [];
let totalValorCarrito = 0;
let seleccionCategoria;
let carritoVacio = "";

alert("Bienvenidos a JJTR co.");
iniciarStore();

function iniciarStore() {
    seleccionCategoria = Number(
    prompt(
        `Favor selecciona el servicio de tu interés:
1. Reparacion De Equipo 
2. Instalacion De OS
3. Desarrollo Web
4. Shop${carritoVacio}
9. Salir`
    )
    );
    switch (seleccionCategoria) {
    case 1:
        agregarAlCarritoProducto(reparacionDeEquipo);
        break;
    case 2:
        agregarAlCarritoProducto(instalacionDeOS);
        break;
    case 3:
        agregarAlCarritoProducto(desarrolloWeb);
        break;
    case 4:
        agregarAlCarritoProducto(shop);
        break;
    case 5:
        if (carritoVacio == "") {
        redireccionarATienda();
        } else {
        verCarrito();
        }
        break;
    case 9:
        alert("Gracias por visitarnos, vuelve pronto");
        break;
    default:
        redireccionarATienda();
        break;
    }
}

function agregarAlCarritoProducto(categoriaProductos) {
    imprimirObjeto(categoriaProductos);
    let volverATienda = "";
    let detallesProducto = "";
    for (let dato in categoriaProductos[productoSeleccionado]) {
    detallesProducto += `${dato}: ${categoriaProductos[productoSeleccionado][dato]}\n`;
    }
    preguntaAgregarCarrito = prompt(
    `Deseas agregar este producto al carrito? S / N:\n\n${detallesProducto}`
    );
    switch (preguntaAgregarCarrito.toLowerCase()) {
    case "s":
        carritoCompra.push(categoriaProductos[productoSeleccionado]);
        carritoVacio = "\n5. Ver carrito";
        volverATienda = prompt(
        `Deseas ver el Carrito o volver a la Tienda?  C / T`
        );
        switch (volverATienda.toLowerCase()) {
        case "c":
            verCarrito();
            break;
        case "t":
            iniciarStore();
            break;
        default:
            redireccionarATienda();
            break;
        }
        break;

    default:
        break;
    }
}

function imprimirObjeto(arrayCat) {
    productoSeleccionado = Number(prompt(recorrerArrayObjetos(arrayCat))) - 1;
    return productoSeleccionado;
}

function recorrerArrayObjetos(arrayObjetos) {
    let resultado = "";
    for (let i = 0; i < arrayObjetos.length; i++) {
    resultado += `${i + 1}) `;
    for (let propiedad in arrayObjetos[i]) {
        resultado += `${propiedad}: ${arrayObjetos[i][propiedad]} `;
    }
    resultado += `\n`;
    }
    return resultado;
}

function verCarrito() {
    let opcionCarrito =
    prompt(`Tu carrito tiene estos productos\n${recorrerArrayObjetos(
        carritoCompra
    )}
Deseas Agregar mas, Eliminar alguno, Total de productos  A / E / T?\n`);
    switch (opcionCarrito.toLowerCase()) {
    case "a":
        iniciarStore();
        break;
    case "e":
        let itemABorrar = prompt(`Cual servicio o producto deseas borrar\n${recorrerArrayObjetos(
        carritoCompra
        )}`);
        eliminarProductoDeArray(carritoCompra, itemABorrar);
        verCarrito();      
        break;
    case "t":
        alert(`El valor de los productos del carrito es de USD ${sumarPreciosArray(carritoCompra)}`);
        verCarrito();
    default:
        redireccionarATienda();
        break;
    }
}

function sumarPreciosArray(arrayATotalizar){
    return arrayATotalizar.reduce((ant, sig) => ant + sig.precio, 0);
}

function eliminarProductoDeArray(arrayAModificar,posicion) {
    arrayAModificar.splice(posicion - 1, 1);
}

function redireccionarATienda() {
    alert(
    `No seleccionaste una opción valida, seras redireccionado a la tienda`
    );
    iniciarStore();  
}