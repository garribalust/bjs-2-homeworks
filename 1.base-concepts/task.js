"use strict";

function solveEquation(a, b, c) {
   let discriminante = b ** 2 - 4 * a * c;

   if (discriminante < 0) {
      return []
  } 
   
if (discriminante === 0) {
     let newResult = - b / (2 * a);
     return [newResult]
   } 
   
if (discriminante > 0) {
   let newPozitiv = (-b + Math.sqrt(discriminante) ) / (2 * a);
   let newPozitiv2 = (-b - Math.sqrt(discriminante) ) / (2 * a);
   return [newPozitiv, newPozitiv2]
}   
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
