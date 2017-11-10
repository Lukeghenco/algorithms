var livingRoomColor; // BAD!!!!!!!!!!!!!!!!
var i; // BAD!!!!!!!!!!!!!

function home() {
  livingRoomColor = "green" 
  var paintLivingRoom = function(color) {
    livingRoomColor = color
    return "painted the living room " + color
  }

  console.log(livingRoomColor)
  console.log(paintLivingRoom("purple"))
  console.log(livingRoomColor)
}

home()

for (var i = 0; i < something; i++) {

}

function asTheyHoist() {
  console.log("something")
  var a = "a"

  function somethingElse() {
    return b;
  }

  var appleSauceRecipe = function() {
    return "this is not a recipe"
  }

  var gameScore = "1:3"
}

function asTheyHoist() {
  var a = "a"
  function somethingElse() {
    return b;
  }
  var appleSauceRecipe;
  var gameScore = "1:3"
  var b = "b"

  a = "c"

  console.log("something") // something
  console.log(appleSauceRecipe()) // typeError
  console.log(somethingElse()) // unknown variable b
  appleSauceRecipe = function() {
    return "this is not a recipe"
  }
}

// ES6 Variable Types 
// LET VS CONST <- only use these 
let / var 

let is reasignable 
let day = "Today"
day = "Tommorow"

const is permenant 
const day = "Today" 

function doSomething(number) {
  const total = number 
  for (let i = 0; i < number; i++) {
    total += i
  }
  return total
}

doSomething(10);

const is permenant for type and values on string, arrays, Integers and floats 

const one = "one"
const array1 = [1,2,3]
const num = 1 
const floater = 1.3

const person = {}
person = [] // TypeError
person.name = "Apple"
person // { name: "Apple" }


