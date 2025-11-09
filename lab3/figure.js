class Square {
  constructor(a) {
    this.a = a;
  }

  static help() {
    console.log("Square: a quadrilateral with four equal sides and four right angles.");
  }

  length() {
    console.log(`Perimeter of square: ${4 * this.a}`);
  }

  square() {
    console.log(`Area of square: ${this.a * this.a}`);
  }

  info() {
    console.log("=== Square Info ===");
    console.log(`Sides: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
    console.log("Angles: 90°, 90°, 90°, 90°");
    console.log(`Perimeter: ${4 * this.a}`);
    console.log(`Area: ${this.a * this.a}`);
  }
}



class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this.b = b;
  }

  static help() {
    console.log("Rectangle: a quadrilateral with opposite sides equal and all angles 90°.");
  }

  length() {
    console.log(`Perimeter of rectangle: ${2 * (this.a + this.b)}`);
  }

  square() {
    console.log(`Area of rectangle: ${this.a * this.b}`);
  }

  info() {
    console.log("=== Rectangle Info ===");
    console.log(`Sides: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
    console.log("Angles: 90°, 90°, 90°, 90°");
    console.log(`Perimeter: ${2 * (this.a + this.b)}`);
    console.log(`Area: ${this.a * this.b}`);
  }
}



class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log("Rhombus: a quadrilateral with four equal sides and opposite angles equal.");
  }

  length() {
    console.log(`Perimeter of rhombus: ${4 * this.a}`);
  }

  square() {
    const radians = (this.alpha * Math.PI) / 180;
    console.log(`Area of rhombus: ${(this.a ** 2 * Math.sin(radians)).toFixed(2)}`);
  }

  info() {
    console.log("=== Rhombus Info ===");
    console.log(`Sides: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
    console.log(`Angles: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°`);
    console.log(`Perimeter: ${4 * this.a}`);
    const radians = (this.alpha * Math.PI) / 180;
    console.log(`Area: ${(this.a ** 2 * Math.sin(radians)).toFixed(2)}`);
  }
}



class Parallelogram extends Rectangle {
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log("Parallelogram: a quadrilateral with opposite sides parallel and equal.");
  }

  length() {
    console.log(`Perimeter of parallelogram: ${2 * (this.a + this.b)}`);
  }

  square() {
    const radians = (this.alpha * Math.PI) / 180;
    console.log(`Area of parallelogram: ${(this.a * this.b * Math.sin(radians)).toFixed(2)}`);
  }

  info() {
    console.log("=== Parallelogram Info ===");
    console.log(`Sides: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
    console.log(`Angles: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°`);
    console.log(`Perimeter: ${2 * (this.a + this.b)}`);
    const radians = (this.alpha * Math.PI) / 180;
    console.log(`Area: ${(this.a * this.b * Math.sin(radians)).toFixed(2)}`);
  }
}


Object.defineProperties(Rhombus.prototype, {
  a: {
    get() {
      return this._a;
    },
    set(value) {
      if (value > 0) this._a = value;
      else console.warn("Side must be positive!");
    }
  },
  alpha: {
    get() {
      return this._alpha;
    },
    set(value) {
      if (value > 0 && value < 180) this._alpha = value;
      else console.warn("Invalid angle!");
    }
  },
  beta: {
    get() {
      return this._beta;
    },
    set(value) {
      if (value > 0 && value < 180) this._beta = value;
      else console.warn("Invalid angle!");
    }
  }
});

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const sq = new Square(5);
const rect = new Rectangle(6, 3);
const rh = new Rhombus(4, 120, 60);
const par = new Parallelogram(7, 4, 110, 70);

sq.info();
rect.info();
rh.info();
par.info();



function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
}

const tri1 = Triangular();
const tri2 = Triangular(5, 5, 8);
const tri3 = Triangular(7, 10, 5);

console.log("=== Triangles ===");
console.log(tri1);
console.log(tri2);
console.log(tri3);



function PiMultiplier(mult) {
  return function() {
    return Math.PI * mult;
  };
}

const times2 = PiMultiplier(2);
const times3div2 = PiMultiplier(1.5);
const divide2 = PiMultiplier(0.5);

console.log("=== Pi Multipliers ===");
console.log(times2());
console.log(times3div2());
console.log(divide2());



function Painter(color) {
  return function(obj) {
    if (obj.type) {
      console.log(`Painting ${obj.type} in ${color}`);
    } else {
      console.log("No ‘type’ property occurred!");
    }
  };
}


const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const obj1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
const obj2 = { type: "Truck", "avg speed": 90, "load capacity": 2400 };
const obj3 = { maxSpeed: 180, color: "purple", isCar: true };

console.log("=== Painter Demonstration ===");
PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);

