console.log('holoa mundo');//imprime en consola
console.log(Math.random());//me muestra el numero random



let num1 = 1;
let num2 = 4;

console.log(num1 + num2);

let letras='soyletras';
console.log(letras.length);

let verdadero=true;
let nulo=null;
let falso= false;
/*
== Para comparar el tipo de dato
=== para comprar el mismo tipo de datp y el mismo valor
*/
const moneda = "$COP";// no cambia
const NumeroColumnas = 9;
 

 //funcionm de toda la vida
 function sumar(numero1,numero2){
    return numero1+numero2;
 }

 //funcion anonima
 const  hola = function(){
    return'hola';
 }

 //funcion de flecha
 const sum=(num1, num2) =>{
    return num1+num2;
 }

 let resultado = sum(3,5);
 console.log(' el resultadpo es: ' +resultado);

 const multiplicarDos = numero_ =>{
    return numero_*2;
 }

 //flecha,que no resiva patrametros,otra que resiva 1, y otra que resiva mas de dos

/*  ----------------------------------------------------------------   */
//punto 1
const numeros = function(){
    return 100;
}
console.log(numeros());
//-----------------------------------------------------
const multi = (numeros1,numeros2)=>{
    return numeros1*numeros2;
}
let Resul_div = multi(5,7);
console.log('el resultado de la muti es' + Resul_div );

//-----------------------------------------------------------------------
//una funcion
const suma9=num=>{
 return num+2;
}

console.log('el resultado de la funcion flecha con 1 parametro es' +suma9(8));

//-----------------------------------------------------------------
 
const suma3 =(nu1,nu2,nu3)=>{
    return nu1+nu2+nu3;
}

let rus = suma3(1,2,3);
console.log('es resultado' + rus);
//----------------------------------------------------------------------

//arreglo
let numeros_ = [1,2,3,4,5,6];
//ingtresa un dato  adicional al final de arreglo
//mi=numeros_.push(10);
//numeros_.pop();

// const sacar = (numeros__1,numeros__2)=>{
//     return numeros__1,numeros__2;
// }
// console.log(numeros_);

// let  sacar= (arreglo);
//  console.log(' es mi numero' +resultad);

 let  agregar = arreglo => {
    // arreglo.pop()
    // return arreglo
    arreglo.push(11)
    return arreglo
 }

 console.log(agregar(numeros_))


let borr = arregla=>{
      arregla.pop()
      return arregla
}

console.log(borr(numeros_))

//----------------------------------- otra forma que lo hice



let eliminar = elim=>{
    return elim=numeros_;
}
eliminar(numeros_.pop());

console.log(eliminar())






let agreg = agr=>{
    return agr=numeros_;
}
agreg(numeros_.push(100));

console.log(agreg())


     







 



















