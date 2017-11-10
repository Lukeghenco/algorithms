/* 

What is a Palindrome? 

Examples: tot mom rotor (sequences) abcba xyzyxyzyx

isAPalindrome('mom') // true
isAPalindrome('money') // false

*/ 

/* 

Rules: 

1. A string that is empty is techically a Palindrome '' = true
2. A string with only one character is a Palindrome 'a' <=> 'a' = true

Proccess: 

Example situation: 'rotor'

Steps: 

1. Check to see if the string is an empty string, if it isn't continue to step 2 else return true  
2. Check to see if the string is one character long, if it isn't continue to step 3 else return true 
3. is the first character and the last character == ?, if it is continue to step 4 else return false // probably build functions that return first and last characters 
4. remove first and last character and repeat the process 'rotor' -> 'oto' -> 't'

returns as true

*/

const firstCharacter = (str) => {
    return str.slice(0, 1)
}

const lastCharacter = (str) => {
    return str.slice(-1)
}

const chopString = (str) => {
    return str.slice(1, -1)
}

const isAPalindrome = (str) => { // 'mom'

    if (typeof str !== 'string') {
        return false 
    }

    if (str.length <= 1) { 
        return true
    }

    if (firstCharacter(str) !== lastCharacter(str)) {
        return false 
    }

    return isAPalindrome(chopString(str)) // 'o'
}

console.log(isAPalindrome('mom') === true)
console.log(isAPalindrome('monkey') === false)
console.log(isAPalindrome('a') === true)
console.log(isAPalindrome('apples') === false)
console.log(isAPalindrome(1) === false)
