// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
   if(min > arr[i]) {
      min = arr[i];
      sum += min;
   }
   if(max < arr[i]) {
      max = arr[i];
      sum += max;
   }
  }
  let avg = sum / arr.length;
  let sar = avg.toFixed(2);
  sar = Number(sar);
  return { min: min, max: max, avg: sar };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
