class Figure {
  constructor(coordinates) {
    this._coordinates = coordinates;
  }

  fill(color) {
    this._color = color;
  }

  get coordinates() {
    return this._coordinates.map(
      (coordinate) => `${coordinate.x}:${coordinate.y}`
    );
  }

  get color() {
    return this._color;
  }
}

const coordinates = [
  {
    x: 1,
    y: 1,
  },
  {
    x: 3,
    y: 1,
  },
  {
    x: 1,
    y: 3,
  },
  {
    x: 3,
    y: 3,
  },
];
const fig = new Figure(coordinates);

console.log('coordinates', fig.coordinates);

class Circle extends Figure {
  get coordinates() {
    return this._coordinates.map(
      (coordinate) => `${coordinate.x}:${coordinate.y}:${coordinate.r}`
    );
  }

  get sqare() {
    return 2 * Math.PI * this._coordinates[0].r;
  }
}

const circle = new Circle([
  {
    x: 10,
    y: 20,
    r: 5,
    d: 456,
    xxxx: 12321,
  },
]);

console.log('circle', circle.coordinates);

class Rectangle extends Figure {
  get coordinates() {
    return `${this._coordinates[0].x}:${this._coordinates[0].y}-${
      this._coordinates[0].x + this._coordinates[0].h
    }:${this._coordinates[0].y + this._coordinates[0].w}`;
  }

  get sqare() {
    return this._coordinates[0].h * this._coordinates[0].w;
  }
}
