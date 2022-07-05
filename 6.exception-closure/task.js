//Задача 1

function parseCount(number) {
  let set = Number.parseInt(number, 10);
  if (isNaN(set)) {
    throw new Error("невалидное значение");
  }
  return set;
}

function validateCount(number) {
   try {
     return parseCount(number);
   } catch (error) {
     return(error);
   }
 }

//Задача 2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a > b + c || b > a + c || c > a + b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    let perimetr = this.a + this.b + this.c;
    return perimetr;
  }

  getArea() {
    let halfMeter = this.getPerimeter() / 2;
    let area = halfMeter * (halfMeter - this.a) * (halfMeter - this.b) * (halfMeter - this.c);
    return +Math.sqrt(area).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
      const newTriang = new Object();
         newTriang.getArea = function () {
            return "Ошибка! Треугольник не существует";
    };
         newTriang.getPerimeter = function () {
            return "Ошибка! Треугольник не существует";
    };
    return newTriang;
  }
}
