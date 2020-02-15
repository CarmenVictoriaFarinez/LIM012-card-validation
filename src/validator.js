const validator = {
  isValid(numero_tarjeta){
//Prueba para numero_tarjeta =123456//
   let cadena = numero_tarjeta.toString();
   let longitud = cadena.length;
   let cifraPares = 0;
   let cifra_cad=0;
   let suma=0;
 for (i=0; i < longitud; i++){
   if (i % 2 !== 0) {
   cifraPares = parseInt(cadena.charAt(i))*2;
   //console.log (cifraPares); 4,8,12
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
 for ( i=1; i < longitud; i+=2){
   suma += parseInt(cadena.charAt(i));
   //console.log (suma);
 }
	
 if ((suma % 10) == 0){ 
  alert("Número de tarjeta correcto");
  console.log (suma);
 } else {
  alert("El número de tarjeta no es válido");
  console.log (suma);
 }
}
};

export default validator;
