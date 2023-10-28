//primera forma para crear nuestro objeto
let user = new Object();

//segunda forma 
let user_2 = {
    nombre: "Rodrigo",
    edad: 30,
    genero: "Masculino",
    telefono: [71953293, 71944220],
    direccion:[
        {zona:"distrito 8", 
        calle: "Siempre Viva", 
        numero: 34},
        {zona:"distrito 8", 
        calle: "Siempre Viva", 
        numero: 34}
    ]
};

let productoFrutas = [{
    nombre: "Manzana de Chile",
    color: "roja",
    precio: [1,2,1,2.5],
    peso: "300 g"
},{
    nombre: "Manzana",
    color: "verde",
    precio: [1,1],
    peso: "350 g"
}]


for (let index = 0; index < productoFrutas.length; index++) {
   
    console.log(productoFrutas[index].precio);
    for (let i = 0; i < productoFrutas[index].precio.length; i++) {
        const element = productoFrutas[index].precio[i];
        console.log(element);
    }
}

//let nombre = "hola rdorigo"
//console.log(nombre.length);
//console.log(productoFrutas);

