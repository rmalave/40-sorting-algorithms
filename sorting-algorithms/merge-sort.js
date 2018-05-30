module.exports = mergesort = (arr, compare = (x, y) => {return x < y} ) => {
  if (arr.length <= 1) return arr;
  var { leftHalf, rigthHalf } = splitarr(arr);
  return jointarrs(mergesort(leftHalf, compare), mergesort(rigthHalf, compare), compare);
}

let splitarr = arr => {
  if (arr.length == 0) return {leftHalf : [], rigthHalf: []};
  if (arr.length == 1) return {leftHalf : arr , rigthHalf : []};
  var index = Math.floor(arr.length / 2);
  return {leftHalf : arr.slice(0, index), rigthHalf : arr.slice(index)};
}

let jointarrs = (arr1, arr2, compare) => {
  var iterator = arr1.length > arr2.length ? arr1.length : arr2.length;
  var [result, index1, index2] = [[], 0, 0];

  while(true){
    if(compare(arr1[index1], arr2[index2])){
      result.push(arr1[index1]);
      index1++;
    } else {
      result.push(arr2[index2]);
      index2++;
    }
    if(index1 == arr1.length || index2 == arr2.length) break;
  }

  if(index1 < arr1.length) return result.concat(arr1.slice(index1));
  if(index2 < arr2.length) return result.concat(arr2.slice(index2));
  return result;
}
