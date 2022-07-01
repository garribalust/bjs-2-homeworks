//Задача 1

function parseCount(number) {
   let set = Number.parseInt(number);
   let err = isNaN(number);
   if(set === true) {
      throw new Error('невалидное значение');
   } 
   return Number.parseInt(set);
}

function sos (a, b) {
   if(a === 0 || b === 0) {
      throw new Error('неверное значение');
   }
   return a / b;
}