module.exports = insertionSort = arr => {
  for (let i = 0, index = i; i < arr.length; i++, index = i) {
    while (index > 0 && arr[index] < arr[index - 1]) {
      let swap = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = swap;
      index -= 1;
    }
  }
  return arr;
}
