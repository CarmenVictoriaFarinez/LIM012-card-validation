import validator from './validator.js';
//Extrae mi input //
const btn = document.getElementById('btn');

const validar = () => {
const tarjeta = document.getElementById('card').value;


if (validator.isValid (tarjeta) == true){
  document.getElementById('ver').innerHTML = "Tu Tarjeta es Valida";
}else {
  document.getElementById('ver').innerHTML = "Tu Tarjeta es invalida";

//document.getElementById ('ver').style.display(none);
//document.getElementById ('ver').style.display('');
}
}
  btn.addEventListener ('click', validar);

   const ocultar = () => {
   const tarjeta = document.getElementById('card').value;
   document.getElementById('ver1').innerHTML = validator.maskify (tarjeta);
    
   };
   btn.addEventListener ('click', ocultar);

//console.log(validator);

