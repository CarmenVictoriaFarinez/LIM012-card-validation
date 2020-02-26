import validator from './validator.js';

const btn = document.getElementById('btn');
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

const validar = () => {
const tarjeta = document.getElementById('card').value;

if (tarjeta == ''){
document.getElementById('alerta').innerHTML = "Please write a card number";
document.getElementById('alerta').classList.add ('alerta');
 
}else {

  if  (validator.isValid (tarjeta) == true){
    document.getElementById('ver').innerHTML = "Your card is valid";
  }
    else {

      document.getElementById('ver').innerHTML = "Your card is invalid";
    }
 
  }
  
}
  btn.addEventListener ('click', validar);

   document.getElementById('pasosver3').classList.remove('borrar');
   document.getElementById('pasosver2').classList.add('borrar');
   
 };

principal.addEventListener ('click', pri);


//console.log(validator);

