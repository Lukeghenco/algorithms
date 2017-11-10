// Hoisting 

// What is hoisting 

function someFunction() {

    var a = "a"
    var actor; 

    console.log(actor)

    console.log(dog)

    var dog = "Snoopy"

    console.log(grabASnack())

    function grabASnack() {
      return "nom nom"
    }

    console.log(b)

    var eatASnack = function() {
      return "crunch, crunch"
    }

    console.log(eatASnack())

    var b = "b"

}

someFunction()
// TypeError 
// TypeError
// "nom nom" √
// "b"
// "crunch crunch" √

