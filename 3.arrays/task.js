function compareArrays(arr1, arr2) {
   return arr1.length === arr2.length && arr1.every((elem, index) => elem === arr2[index]); 
 }

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0).filter(i => i % 3 === 0).map(elem => elem * 10);

  return resultArr;
}