function compareArrays(arr1, arr2) {
   let result = arr1.every((elem, ind) => arr2.includes(elem, ind));
       if (arr1.length < arr2.length) {
         return false;
       }
   return result;
 }

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0).filter(i => i % 3 === 0).map(elem => elem * 10);

  return resultArr;
}