import validator from './validator.js';



//Extrae mi input //
const btn = document.getElementById('btn');
const validar = () => {
const tarjeta = document.getElementById('card').value;

//if (tarjeta == ''){
  //document.getElementById('alerta').innerHTML = "Por favor escriba un numero de tarjeta";
  //document.getElementById('alerta').classList.add ();
 if  (validator.isValid (tarjeta) == true){
  document.getElementById('ver').innerHTML = "Your card is valid";
}else {
  document.getElementById('ver').innerHTML = "Your card is invalid";
 
  }
}
//}

  btn.addEventListener ('click', validar);
  

const enmascarar = () => {
const tarjeta = document.getElementById('card').value;
document.getElementById('ver1').innerHTML = validator.maskify (tarjeta);
    
}
btn.addEventListener ('click', enmascarar);

const pasos = document.getElementById('pasos');
const gift = () => {
document.getElementById('pasosver2').classList.remove ('borrar');
document.getElementById('pasosver3').classList.add('borrar');
};

pasos.addEventListener ('click', gift);

const principal = document.getElementById('principal');
const pri = () => {
   document.getElementById('pasosver3').classList.remove('borrar');
   document.getElementById('pasosver2').classList.add('borrar');
 };
principal.addEventListener ('click', pri);

//console.log(validator);

