import validator from './validator.js';
//Extrae mi input //
  let btn = document.getElementById('btn');

  let validar = () => {
  let tarjeta = document.getElementById('card').value;
  let numero_tarjeta = validator.isValid (tarjeta);

   }
  btn.addEventListener ('click', validar);

   let ocultar = () => {
   let tarjeta = document.getElementById('card').value;
   let numero_tarjeta = validator.maskify (tarjeta);
   }
   btn.addEventListener ('click', ocultar);





console.log(validator);

