const returnSecondItem = (array) => {
  return array[1];
}

returnSecondItem([1,2,3,4,5,6,7,8]) // => 2
returnSecondItem([
  { name: "Luke" },
  { name: "Marcel" },
  { name: "Karuna" }
]) // => { name: "Marcel" }

Input = n

O(1) - Constant Time;

array1 = [1,2,3,4,5,6,7,8,9 .. 9000000]
array2 = [1,2,3,4,5]

/*
 LINEAR SEARCH: O(n) - Linear Time
*/

array1 = [1,2,3,4,5,6,7,8,9 .. 9000000]

const linearSearch = (array, targetValue) => {
  const arrayLength = array.length;
  for (var i = 0; i < arrayLength; i++) {
    if (array[i] === targetValue) {
      return i;
    }
  }

  return -1;
}

linearSearch(array1, 9000001); // => -1


/*
  BINARY SEARCH: O(log n) - Logarithmic Time
  constraint is it must be a sorted array
*/

array1 = [1,2,3,4,5,6,7,8,9 .. 9000000]

const binarySearch = (sortedArray, targetValue) {
  let min = 0;
  let max = sortedArray.length - 1;
  let guess;

  while(min <= max) {
    guess = (min + max) / 2 | 0;
    let element = sortedArray[guess];
    if (element === targetValue) {
      return guess;
    } else if (element < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
}

binarySearch(array1, 55000) // => 54999

/*
  Finding Duplicates O(n^2)
*/

const findUnique = (array1, array2) => {
  let uniqueItems = [];
  let array1Length = array1.length;
  let array2Length = array2.length;

  // O(n)
  for (var i = 0; i < array1Length; i++) {
    let unique = true;

    // O(n^2)
    for (var j = 0; j < array2Length; i++) {
      if (array1[i] === array2[j]) {
        unique = false;
      }
    }

    if (unique === true) {
      uniqueItems.push(array1[i])
    }
  }

  return uniqueItems;
}

findUnique([1,2,3,4,5,6], [1,3,5]) // [2,4,6]
