//if
let a,b,c
a = parseInt(prompt("Ingrese el valor A"));
b = parseInt(prompt("Ingrese valor B"));
c = parseInt(prompt("Ingrese el valor C"));
//and --> &&, or --> ||
if(a>b && a>c){
    if(b>c){
        alert("-" + a+ "-" + b + " -" + c)
    }else{
        alert("-" + a+ "-" + c + " -" + b)
    }
    
}else if(b>a && b>c){
    if(a>c){
        alert("-" + b+ "-" + a + " -" + c)
    }else{
        alert("-" + b+ "-" + c + " -" + a)
    }
}else{
    if(a>b){
        alert("-" + c+ "-" + a + " -" + b)
    }else{
        alert("-" + c+ "-" + b + " -" + a)
    }
}

//if terniario
//while
//for