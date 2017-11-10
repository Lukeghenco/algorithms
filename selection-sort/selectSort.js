

// let cards = [ 2, 5, 1000, 900, 45, 3 ];

/*
 Swapping Values 

1. Create a function called Swap 
2. Pass in 3 arguements 
   - Array 
   - first Swap Location 
   - second Swap Location 
3. Set the value of the first Swap location item to a variable call firstValue
4. Update the first Swap Location (firstIndex) with the value form the 2nd Swap Location (secondIndex)
5. Update the second Swap Location (secondIndex) with the value of the firstValue
*/

// Constant Time O(1);

const swap = (array, firstIndex, secondIndex) => {
  const firstValue = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = firstValue;
}

// console.log("The original set of cards was %s", cards)
// console.log(" ")
// console.log("Start swapping");
// console.log(" ")
// swap(cards, 1, 3)
// console.log("The swapped value of cards is %s", cards);
// console.log(" ")

// console.log("We want the values lowest to highest")

/*

FindIndexOfMin

O(n) // pending ******* 

1. We want to find the number with the smallest value and swap it with the first number in the array (index 0).
  - let array = [20, 19, 4, 31, 2, 8]. 
  - Which is index 4    // 4
  - return the index of the smallest value
2. We want to find the 2nd smallest value in our number array and replace it with the number in index 1 of our array.
  - let array = [20, 19, 4, 31, 2, 8]
  - let subArray = [20, 19, 4, 31, 8]
  - pass in the entire array and give it a starting point
2. We want to find the 3nd smallest value in our number array and replace it with the number in index 2 of our array.
3. Rinse and Repeat

*/

const findIndexOfMin = (array, startingPoint) => {
  let minVal = array[startingPoint]; 
  let minIndex = startingPoint;
  let arrayLength = array.length;

  for (var i = startingPoint + 1; i < arrayLength; i++) {
    if (array[i] < minVal) { // 300 < 5
      minVal = array[i] // 5
      minIndex = i;
    }
  }

  return minIndex;
}


/* 

  Selection Sort 
  --------------

  You give it an array and it sorts the values and returns them in ascending order from lowest to highest in value 
  

*/

const swap = (array, firstIndex, secondIndex) => {  // O(1)
  const firstValue = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = firstValue;
}

const findIndexOfMin = (array, startingPoint) => {  // O(n)
  let minVal = array[startingPoint]; 
  let minIndex = startingPoint;
  let arrayLength = array.length;

  for (var i = startingPoint + 1; i < arrayLength; i++) {
    if (array[i] < minVal) { // 300 < 5
      minVal = array[i] // 5
      minIndex = i;
    }
  }

  return minIndex;
}

const selectionSort = (array) => {   // O(n) * O(n) = o(n^2)
  const arrayLength = array.length;

  for (var i = 0; i < arrayLength; i++) {
    const minIndex = findIndexOfMin(array, i);
    swap(array, i, minIndex);
  }

  return array;
}


/*
  O(n)
*/