// main.js
import { add, subtract } from './utils.js';

console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2


import Calculator, { VERSION } from './calculator.js';

const calc = new Calculator();
console.log(calc.add(5, 3));  // 8
console.log(VERSION);         // '1.0'


import { add as sum, subtract as minus } from './math.js';

console.log(sum(5, 3));     // 8
console.log(minus(5, 3));   // 2

import * as mathUtils from './mathUtils.js';

console.log(mathUtils.add(5, 3));      // 8
console.log(mathUtils.multiply(4, 2)); // 8