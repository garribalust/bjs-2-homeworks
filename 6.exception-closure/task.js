//Задача 1

function parseCount(number) {
   let set = Number.parseInt(number, 10);
   if(isNaN(set)) {
      throw new Error('невалидное значение');
   } else {
      return set;
   }
}

function validateCount(number) {
      let interception = parseCount(number);
      return interception;
}

//Задача 2

class Triangle { 
   constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if(a > (b + c) || b > (a + c) || c > (a + b)) {
         throw new Error('Треугольник с такими сторонами не существует');
      }
   }

   getPerimeter(a, b, c) {
      return a + b + c;
   } 

   getArea(a, b, c) {
      let halfMeter = (a + b + c) / 2;
      let area = halfMeter * (halfMeter - a) * (halfMeter - b) * (halfMeter - c);
      return Math.sqrt(area).toFixed(3);
   } 
}

function getTriangle(a, b, c) {
try {
   return new Triangle(a, b, c); 
} catch(error) {
   const newTriang = new Object();
   newTriang.getArea = function () {
      return "Ошибка! Треугольник не существует";
   }
   newTriang.getPerimeter = function () {
      return "Ошибка! Треугольник не существует";
   }
   return newTriang;
}  
}