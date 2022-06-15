// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
   sum += min, max;
   if(min > arr[i]) {
      min = arr[i];
   }
   if(max < arr[i]) {
      max = arr[i];
   }
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
   let sum = 0;
   for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return sum;
}

function makeWork(arrOfArr, func) {
   let max = arrOfArr[0];
   func();
   for(let i = 0; i < arrOfArr.length; i++) {
      arrOfArr.push(func(arrOfArr[i]))
      if(max < arrOfArr[i]) {
         max = arrOfArr[i];
      }
   }
  
   return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
