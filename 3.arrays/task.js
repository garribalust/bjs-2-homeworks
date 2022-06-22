function compareArrays(arr1, arr2) {
   let result = arr1.every((elem, index) => elem === arr2[index] && arr2[index] === elem);
       if(arr1.length < arr2.length) {
         return false;
       }
   return result;
 }

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0).filter(i => i % 3 === 0).map(elem => elem * 10);

  return resultArr;
}