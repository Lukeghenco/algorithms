// var names = ["Ivan", "Luke", "Jose", "Jarrel", "Minh"]

// var sortedNames = ["Ivan", "Jarrel", "Jose", "Luke", "Minh"]

// SWAPPING VALUES 

/**
 * Build a function that swaps Numbers
 * it will swap two items in an array
 * it will have three items as arguments 
 * @arg :1 array
 * @arg :2 firstIndex
 * @arg :3 secondIndex
 */


// var numbers = [2, 4, 45, 56, 1000, 39, 35, 30]
// swap(numbers, 2, 5) // [2, 4, 39, 56, 1000, 45, 35, 30]


/**
 * BUBBLE SORT
 * 
 * Step: 1 - If we have an array of numbers, we want to find the smallest number first and make it index 0 of the array
 *  - var numbers = [35, 2, 30, 90, 5] // find index of min => swap // [2, 35, 30, 90, 5]
 * Step: 2 - Find the second smallest number of an array and make index 1
 * - subarray = [35, 30, 90, 5]  // numbers = [2, 5, 30, 90, 35]
 * Step: 3 - Find the third smallest number of an array and make index 2
 *  - subarray = [30, 90, 35] // swap // numbers = [2, 5, 30, 90, 35]
 * Step: 4 - Find the fourth smallest number of an array and make index 3 
 *  - subarray = [90, 35] // swap //  numbers = [2, 5, 30, 35, 90]
 * ... continue until subrarray.length === 1
 */


const swap = function(array, firstIndex, secondIndex) {
  var firstItem = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = firstItem
  return array 
}

const findIndexOfMinimumValue = function(array, index) {
  let minimumValue = array[index]
  let minimumIndex = index; 
  
  for (var i = index + 1; i < array.length; i++) { 
    if (array[i] < minimumValue) {
      minimumValue = array[i]
      minimumIndex = i
    }
  }

  return minimumIndex
}

const bubbleSort = function(array) {
  for (var i = 0; i < array.length; i++) {
    var minimumIndex = findIndexOfMinimumValue(array, i)
    swap(array, i, minimumIndex)
  }

  return array
}

var numbers = [20, 4, 45, 56, 1, 39, 35, 30]
console.log(bubbleSort(numbers) === [ 1, 4, 20, 30, 35, 39, 45, 56 ])
