function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return { min: min, max: max, avg: +avg.toFixed(2) };
}
console.log(getArrayParams(-99, 99, 10));
console.log(getArrayParams(1, 2, 3, -100, 10));
console.log(getArrayParams(5));

function summElementsWorker(...arr) {
 if(arr.length === 0){
     return 0;
   }
   let sum = 0;
   for(let i = 0; i < arr.length; i++){
     sum += arr[i];
   }
   return sum;
}

function differenceMaxMinWorker(...arr) {
 if(arr.length === 0){
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
if(arr.length === 0){
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
if(arr.length === 0){
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}
console.log(summElementsWorker()); 
console.log(summElementsWorker(10, 10, 11, 20, 10)); 
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); 
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); 
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 
console.log(averageEvenElementsWorker());
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++){
    const result = func(...arrOfArr[i]);
    if(result > maxWorkerResult){
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
 const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); 
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker)); 
console.log(makeWork(arr, averageEvenElementsWorker)); 
