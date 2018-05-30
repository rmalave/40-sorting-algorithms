module.exports = quicksort = (arr) => {
    if (arr.length === 0) return [];
    let [pivot, ...xs] = arr;
    return [...quicksort(xs.filter(y => y < pivot)), pivot, ...quicksort(xs.filter(y => y >= pivot))];
};
