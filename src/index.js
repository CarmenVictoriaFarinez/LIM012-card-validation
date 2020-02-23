import validator from './validator.js';
//Extrae mi input //
const btn = document.getElementById('btn');

const validar = () => {
const tarjeta = document.getElementById('card').value;


if (validator.isValid (tarjeta) == true){
  document.getElementById('ver').innerHTML = "Your card is valid";
}else {
  document.getElementById('ver').innerHTML = "Your card is invalid";
 
}
}
  btn.addEventListener ('click', validar);

const ocultar = () => {
const tarjeta = document.getElementById('card').value;
document.getElementById('ver1').innerHTML = validator.maskify (tarjeta);
    
}
btn.addEventListener ('click', ocultar);

const ganar = document.getElementById('ganar');
const gift = () => {
const inst = document.getElementById('ganar').value;

document.getElementById('ver2').classList.remove ('borrar');
};
ganar.addEventListener ('click', gift);

//console.log(validator);

