// Iterative Loop 

// 6 possible spices (6!) == (n!)
// 6 * 5 * 4 * 3 * 2 * 1 = 720 possible mixtures 

/*
Steps:

1. declare a function call factorial that takes in an argument of an integer that is positive(0..)
2. Rule #1 if 0 then return 1
3. Have a starting result of 1 
4. Loop over the numbers from highest to lowest, so if we pass in a 6 we loop like this 6 -> 5 -> 4 -> etc..
5. For each loop we want to multiply the result by the number in the loop 
6. We want to return the current value of result for our function
*/

// const factorial = (n) => {
//   let result = 1;
//   if (n === 0) {
//     return result;
//   }

//   for (let i = n; i > 0; i--) {
//     result *= i;
//   }

//   return result;
// }


// Recursive

const factorial = (n) => { // n = 5
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const reverseArray = (array) => {
  let reversedArray = [];
  
  const reverser = (array) => {
    if (array.length === 0) {
      return;
    }
    reversedArray.push(array[array.length - 1]); // push in 2
    reverser(array.slice(0, array.length - 1)); // call the reverser with [1];
  }
 
  reverser(array);
  return reversedArray;
}


const reverseString = (string) => {
  if (string === undefined || string === '') return null;
  
  return string.length === 1 ? string : string.charAt(string.length - 1) + reverseString(string.substring(string.length - 1, 0))
}

console.log('monkey' === reverseString('yeknom'));
console.log('happy' === reverseString('yppah'));
console.log(null === reverseString(''));
console.log(null === reverseString(undefined));