/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna True si "x" e "y" son iguales.
   // De lo contrario, retorna False.
   // Tu código:
   var x = x;
   var y = y;
   if(x==y){
      return true;
   }else{
      return false;
   }

}

function tienenMismaLongitud(str1, str2) {
   // Retorna True si los dos strings tienen la misma longitud.
   // De lo contrario, retorna False.
   // Tu código:
   var str1 = str1;
   var str2 = str2;
   if (str1.length == str2.length){
      return true;
   }else{
      return false;
   }
}

function menosQueNoventa(num) {
   // Retorna True si el argumento "num" es menor que noventa.
   // De lo contrario, retorna False.
   // Tu código:
   var num = num;
   if (num < 90){
      return true;
   }
   return false;
}

function mayorQueCincuenta(num) {
   // Retorna True si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna False.
   // Tu código:
   var num = num;
   if (num > 50){
      return true;
   }
   return false;
}

function esPar(num) {
   // Retorna True si "num" es par.
   // De lo contrario, retorna False.
   // Tu código:
   var num = num;
   if (num % 2 == 0){
      return true;
   }
   return false;
}

function esImpar(num) {
   // Retorna True si "num" es impar.
   // De lo contrario, retorna False.
   // Tu código:
   var num = num;
   if (num % 2 == 1){
      return true;
   }
   return false;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
