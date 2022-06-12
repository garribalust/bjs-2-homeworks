"use strict";

function solveEquation(a, b, c) {
   let discriminante = b ** 2 - 4 * a * c;
   let array = [];
   
   if (discriminante === 0) {
     let newResult = - b / (2 * a);
     array.push(newResult)
   } 
   
   if (discriminante > 0) {
   let newPozitiv = (-b + Math.sqrt(discriminante) ) / (2 * a);
   let newPozitiv2 = (-b - Math.sqrt(discriminante) ) / (2 * a);
   array.push(newPozitiv, newPozitiv2)
}  return array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
