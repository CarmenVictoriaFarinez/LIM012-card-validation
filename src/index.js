//import validator from './validator.js';
let btn = document.getElementById('btn');
btn.addEventListener ('click', validar);

function validar () {
  let numberCard = document.getElementById('card').value;
  array = Array.from(numberCard);
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray = newArray + array[i];
    
    let sumador = 0;
    for (i = 0; i <= newArray.length; i++) {
      if (i % 2 !== 0) {
        let positionPar = parseInt(newArray[i]) * 2;
        
        if (parseInt(positionPar) >= 10) {
         let valor = positionPar.toString();
         let valor1 = Array.from (valor);

         
         let suma=0;
         for (x = 0; x < valor.length; x++){
         suma = suma + parseInt (valor1[x]); 
         }
         sumador = sumador + suma;
         alert (suma);
        }
      }
    }
  }
}

//console.log(validator);
