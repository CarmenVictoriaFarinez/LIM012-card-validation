const validator = {
isValid: (numero_tarjeta) =>{
//Prueba para numero_tarjeta =123456//
let cadena = numero_tarjeta.toString();
let invArray =[];
let cifraPares = 0;
let cifraImpares = 0;
let cifra_cad=0;
let suma=0;

//if (cadena == '/^[0-9]$/'){
//alert("Por favor introducir solo numeros");

for ( let i = cadena.length - 1; i >= 0; i--) {
    invArray = invArray + cadena[i]; 
    //console.log (invArray); 
 }

 const longArray = invArray.toString();
 const longitud = longArray.length; 
for (let i=0; i < longitud; i++){
  if (i % 2 !== 0) {
  cifraPares = parseInt(longArray.charAt(i))*2;
  //console.log (cifraPares); 
   if (cifraPares > 9){ 
     cifra_cad = cifraPares.toString();
     cifraPares = parseInt(cifra_cad.charAt(0)) + 
parseInt(cifra_cad.charAt(1));
    //console.log (cifraPares); 1+2 =3
   }
   suma=suma + cifraPares;
   //console.log (suma); 4, 12, 15
   }
 }
 for ( let i=0; i < longitud; i+=2){
  if ( i % 2 == 0) {

    cifraImpares = parseInt(longArray.charAt(i));
    //console.log (cifraImpares);
  suma += parseInt(cifraImpares);
  //console.log (suma);
}
}
	
 if ((suma % 10) == 0){ 
    return true;
  //alert('Número de tarjeta correcto');
  //console.log (suma);
 } else {
    return false;
  //alert('El número de tarjeta no es válido');
  //console.log (suma);
 }
}, 

  maskify: (numero_tarjeta) => {
    
    
    let extra = numero_tarjeta.slice(-4);
    let nuevaCadena = ''; 
    
    
  for (let i=0; i< numero_tarjeta.length-4;  i++){ 
  nuevaCadena += '#'; 
  } 
  //alert(nuevaCadena + extra);
 return nuevaCadena + extra;
}
};
// It's always a good time, for a great style
export default validator;
