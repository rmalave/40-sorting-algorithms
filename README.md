# Sorting Algorithms

* **Runtime Complexity** - The majority of efficient sorting algorithms run in
  `O(N log N)` time. Less efficient sorting algorithms sort in `O(N^2)` (or
  worse) time.
  [Bucket Sort](https://en.wikipedia.org/wiki/Bucket_sort) and
  [Radix Sort](https://en.wikipedia.org/wiki/Radix_sort)
  can run in `O(N)` time if a data set has certain characteristics, but they
  can't be used to sort information universally.
* **Memory Usage** - does the algorithm sort the data in place, or require
  additional memory space?
* **Stability** - If you sort a list of companies by region first, then by
  profit, will they stay grouped by region where appropriate?
* **Adaptability** - If the dataset starts nearly already sorted, does the
  algorithm take advantage of this fact, or do a bunch of needless work?
* **Serial** - the algorithm must run serially.
* **Parallel** - the algorithm may be distributed across many processes or
  machines.

## Sorting Algorithms
* [Bubble Sort](https://en.wikipedia.org/wiki/Bubble__sort)
* [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)
* [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort)
* [Quicksort](https://en.wikipedia.org/wiki/Quicksort)

### Bubble Sort
* **Worst Case Performance:** `O(N^2)`
* **Average Performance:** `O(N^2)`
* **Best-Case Performance:** `O(N)`

Bubble Sort is a famously inefficient sorting algorithm.
But it gets the job done! It's easy to understand and not so
hard to implement. It's an excellent first sorting algorithm
to write.

Here's the idea:
* Move from the front toward to the end of the array
* Compare every two adjacent values
* Swap adjacent values if the larger is on the left
* Keep track of if you've swapped any values or not
* Continue moving toward the end of the array
* Always swap any two unsorted adjacent values
* Once you're at the end of the array start over from the front
* The array is sorted if you ever go all the way through it
  without swapping any two values.

This **Bubble Sort** algorithm moves through the array over and over and makes
values "bubble-up" toward the end of the array.

It's inefficient because it might take many many iterations through
the array to bring all large values from the front to the end. If
the array starts as reverse-sorted that's the worst case scenario for
Bubble Sort because it has to bring each large value all the way from the
front to the end of the array only one at a time. 

Bubble Sort actually performs very efficiently if you know the data
starts as "nearly-sorted." If there's only a few values that need to
be swapped in the whole array then Bubble Sort might be able to untwist
the slight knots just in one pass!

### Insertion Sort
* **Worst Case Performance:** `O(N^2)`
* **Average Performance:** `O(N^2)`

Insertion sort is a simple, inefficient algorithm. Basically, it says:

1. Start at the first index of an array.
2. Iterate through the whole array to find the smallest value.
3. Put the smallest value at the first index.
4. Go to the next index.
5. Find the smallest value from that index and place it there.
6. Repeat finding the smallest value over and over for each index of the array.

This sorting algorithm is a classic example of something that runs in `O(N^2)`
time. It uses two nested for loops. The first for loop iterates through each
index of the array, the second inner for loop iterates through (essentially)
the entire array again. That's `O(N^2)`!.

### Merge Sort
**Worst Case Performance:** `O(N log N)`
**Average Performance:** `O(N log N)`

Merge sort is a recursive algorithm that asks the question: what are some of
the easiest arrays to sort?

* Well, an empty array is easy to sort (because it's already sorted!)
* Well, a single-element array is easy to sort (because it's already sorted!)
* Well, it's easy to take two sorted arrays and merge them together into one
  sorted array.

Merge Sort takes an array and recursively splits it in half over and over until
each piece of the array is just one element. Then, as it returns from all the
recursive calls it merges the two arrays together so two single elements are
sorted into a two-length array. Then two-length arrays are sorted into
four-length arrays. And so on and so on until the entire array is remerged
entirely back together all sorted.

### Bucket Sort
If you're data set is integers within a certain range you can create a sorted
copy of the data in `O(N)` time by iterating through the data and tallying up
how often each element occurs, then creating a new array adding that number
of each integer.

Assume you had an array of numbers that you know only contains integers from
`0` to `5`. Create an array of size `6` to represent a tally for each number.
Iterate through the array and count how often each integer appears.

Input data:

```
[0, 4, 4, 3, 1, 1, 1, 2, 5]
```

The tally array shows there's one zero, three ones, one two, one three, two
fours and one five.

```
[1, 3, 1, 1, 2, 1]
```

Create a new array with the same length as the initial array. Iterate through
the tally array and append each number the amount of times it was tallied:

```
[0, 1, 1, 1, 2, 3, 4, 4, 5]
```

Tallying the numbers takes `O(N)` time. Generating the final new array takes
`O(N)` time. It's an efficient sorting algorithm, but only applies to a very
specific type of data set!

### QuickSort
[Interactive Quicksort Demo](http://me.dt.in.th/page/Quicksort/)

**Worst Case Performance:** `O(N^2)`
**Average Performance:** `O(N log N)`

Quicksort is an extremely efficient sorting algorithm. It's an in-place sorting
algorithm so it doesn't require any additional memory.

1. Pick an element in the array and call it the `pivot`
2. Rearrange everything in the array so everything before the `pivot` is less
   than the value of the pivot, and everything after the `pivot` is greater
   than the value of the pivot.
  * Recognize that now the `pivot` element is at exactly the correct index it
    should be at.
4. Repeat this process for every index of the array.

It's possible for Quicksort to encounter particularly unfortunate data
situations. If you start the pivot at the start or end of the array and the
array starts as sorted then it can take worst case `O(N^2)` time. Solutions for
this problem state that the pivot should be chosen as a random index, or the
middle index.
