"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  }
  else if (d === 0) {
    arr.push(-b / (2 * a));
  }
  else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  
  return arr;
}
console.log (solveEquation(1, 5, 4));
console.log (solveEquation(1, 2, 1));
console.log (solveEquation(1, 2, 10));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 /12;
  let s = amount - contribution;
  let monthlyPayment = s * (p + (p / (((1 + p)
  ** countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return +totalAmount.toFixed(2);
}

console.log (calculateTotalMortgage(10, 0, 50000, 12));
console.log (calculateTotalMortgage(10, 1000, 50000, 12));
console.log (calculateTotalMortgage(10, 0, 20000, 48));
console.log (calculateTotalMortgage(10, 0, 10000, 36));
console.log (calculateTotalMortgage(15, 0, 10000, 36));
