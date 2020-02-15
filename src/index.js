import validator from './validator.js';

  let btn = document.getElementById('btn');
  let validar = () => {
  let tarjeta = document.getElementById('card').value;
  let numero_tarjeta = validator.isValid (tarjeta);

   }
btn.addEventListener ('click', validar);
console.log(validator);