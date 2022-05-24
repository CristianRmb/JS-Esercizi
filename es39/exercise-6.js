// # Classes - Exercise 6
// Definire la classe `AreaCalculator` che, tramite un metodo statico, 
// si occupa di calcolare l'area della figura passata come parametro. 
// Il metodo deve essere capace di calcolare l'area del quadrato, rettangolo e cerchio.

class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figura){
    switch (figura) {
      case square:
        return square.side*square.side
      case rectangle:
        return rectangle.height*rectangle.width
      case circle:
        return circle.radius**2 * 3.14;
      default:
        console.log("figura non disponibile");
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));