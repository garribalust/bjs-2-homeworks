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
  let bodyCredit = amount - contribution;
  let difference = Math.ceil((date - new Date) / 1000 / 3600 / 24 / 30.5);
  let payment = bodyCredit * 

  // код для задачи №2 писать здесь

  return totalAmount;
}
