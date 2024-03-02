

const Calculator = {
    // Constants
    constants: {
      pi: Math.PI,
      e: Math.E,
      phi: (1 + Math.sqrt(5)) / 2 // Golden ratio
    },
  
    // Fractional Operators
    simplifyFraction: function (numerator, denominator) {
      if (denominator === 0) return 'Undefined';
  
      const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
      const common = gcd(numerator, denominator);
  
      numerator /= common;
      denominator /= common;
  
      return `${numerator} / ${denominator}`;
    },
  
    // Equation Solver
    solveEquation: function (expression) {
      try {
        const parts = expression.split('=');
        if (parts.length !== 2) return 'Invalid equation';
  
        const leftSide = parts[0];
        const rightSide = parts[1];
  
        const equation = `${leftSide} - (${rightSide})`;
        const result = eval(equation);
  
        return `x = ${result}`;
      } catch (error) {
        return 'Error';
      }
    },
  
    // Numerical Integration
    integrate: function (expression, lowerBound, upperBound, numIntervals) {
      try {
        const func = new Function('x', `return ${expression}`);
        let result = 0;
        const deltaX = (upperBound - lowerBound) / numIntervals;
  
        for (let i = 0; i < numIntervals; i++) {
          const x0 = lowerBound + i * deltaX;
          const x1 = lowerBound + (i + 1) * deltaX;
          result += (func(x0) + func(x1)) / 2 * deltaX;
        }
  
        return result;
      } catch (error) {
        return 'Error';
      }
    },
  
    // Statistical Functions
    mean: function (values) {
      const sum = values.reduce((acc, val) => acc + val, 0);
      return sum / values.length;
    },
  
    median: function (values) {
      const sorted = values.slice().sort((a, b) => a - b);
      const middle = Math.floor(sorted.length / 2);
  
      if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
      } else {
        return sorted[middle];
      }
    },
  
    variance: function (values) {
      const mu = this.mean(values);
      const diffs = values.map(val => val - mu);
      const squaredDiffs = diffs.map(diff => diff * diff);
      const sumSquaredDiffs = squaredDiffs.reduce((acc, val) => acc + val, 0);
      return sumSquaredDiffs / values.length;
    },
  
    // Number Base Conversion
    convertBase: function (number, fromBase, toBase) {
      return parseInt(number, fromBase).toString(toBase);
    },
  
    // Exponential and Logarithmic Functions
    exp: function (value) {
      return Math.exp(value);
    },
  
    log: function (value, base) {
      return Math.log(value) / Math.log(base);
    },
  
    // Trigonometric Functions
    sin: function (angle) {
      return Math.sin(angle);
    },
  
    cos: function (angle) {
      return Math.cos(angle);
    },
  
    tan: function (angle) {
      return Math.tan(angle);
    },
  
    // Additional Mathematical Functions
    abs: function (value) {
      return Math.abs(value);
    },
  
    ceil: function (value) {
      return Math.ceil(value);
    },
  
    floor: function (value) {
      return Math.floor(value);
    },
  
    sign: function (value) {
      return Math.sign(value);
    },
  
    factorial: function (n) {
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * this.factorial(n - 1);
    },
  
    permutation: function (n, r) {
      return this.factorial(n) / this.factorial(n - r);
    },
  
    combination: function (n, r) {
      return this.factorial(n) / (this.factorial(r) * this.factorial(n - r));
    },
  
    gcd: function (a, b) {
      if (!b) {
        return a;
      }
      return this.gcd(b, a % b);
    },
  
    lcm: function (a, b) {
      return Math.abs(a * b) / this.gcd(a, b);
    },
  
    sqrt: function (value) {
      return Math.sqrt(value);
    },
  
    cbrt: function (value) {
      return Math.cbrt(value);
    },
  
    pow: function (base, exponent) {
      return Math.pow(base, exponent);
    },
  
    log10: function (value) {
      return Math.log10(value);
    },
  
    log2: function (value) {
      return Math.log2(value);
    },
  
    sinh: function (value) {
      return Math.sinh(value);
    },
  
    cosh: function (value) {
      return Math.cosh(value);
    },
  
    tanh: function (value) {
      return Math.tanh(value);
    },
  
    asin: function (value) {
      return Math.asin(value);
    },
  
    acos: function (value) {
      return Math.acos(value);
    },
  
    atan: function (value) {
      return Math.atan(value);
    },
  
    hypot: function (x, y) {
      return Math.hypot(x, y);
    },
  
    toDegrees: function (radians) {
      return radians * (180 / Math.PI);
    },
  
    toRadians: function (degrees) {
      return degrees * (Math.PI / 180);
    }
  };
  
export default Calculator;