//funciones
// function suumar() {
//     console.log("holas suma");
// }
// suumar();
//funciones normales

// function multiplicaciones(a,b) {
    
//     return a*b;
// }

// let aa = multiplicaciones(2,4);
// console.log(aa);

//funciones con flecha

// const sumar = b =>{
//     for (let index = 0; index < b; index++) {
//         const element = index;
//         return element;
//     }
// }
// console.log(sumar(4));


const https = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        // for (let index = 0; index < json.length; index++) {
        //     const element = json[index];
        //     console.log(element.body);
        // }
    })
}

https();


// let datas = [{nombre: "fff",
// edad: [34,56]}]

//--->>lista de objetos
// Object.entries(datas).forEach(([key, value]) =>{
//   console.log(key +":"+ value);
// })

//listar con forEach
// datas.forEach(element => {
//   console.log(element.nombre);
//   element.edad.forEach(element => {
//     console.log(element);
//   });
// });

//-->se puede modificar sobre el array.
// array.forEach((elemento, indice, arr) => {
//   arr[indice] = elemento * 2;
// });

//-->map(), se utiliza para forma otro array.
// datas.map(ele =>{
//   console.log(ele);
// })