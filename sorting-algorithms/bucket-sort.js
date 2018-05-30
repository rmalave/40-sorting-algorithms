module.exports = bucketSort = (arr, bucketSize = 1) => {
  if (arr.length === 0) return []
  let min = arr[0]
  let max = arr[0]
  let output = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]
    if (arr[i] > max) max = arr[i]
  }
  let bucketCount = Math.floor((max - min) / bucketSize) + 1
  let buckets = new Array(bucketCount)
  for (let i = 0; i < buckets.length; i++) buckets[i] = []
  for (let i = 0; i < arr.length; i++) buckets[Math.floor((arr[i] - min) / bucketSize)].push(arr[i])
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i])
    for (let j = 0; j < buckets[i].length; j++) output.push(buckets[i][j])
  }
  return output
}
