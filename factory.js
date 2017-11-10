function Car() {

  return {
    setAttributes,
    paintCar
  }

  function setAttributes(attributes) {
    Object.assign(this, attributes);
  }

  function paintCar(color) {
    this.color = color;
  }
  
}

let car = Car();
car.setAttributes({ make: 'Honda' });
car.paintCar('blue');

console.log(car);

class Dog {
  constructor() {    

  }

  apple() {

  }

  money() {

  }
}

let dog = new Dog();
console.log(dog);