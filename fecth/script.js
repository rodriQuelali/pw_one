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