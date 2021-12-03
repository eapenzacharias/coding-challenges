'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const positives = arr.filter(x => x > 0).length;
  const negetives = arr.filter(x => x < 0).length;
  console.log((positives / arr.length).toFixed(6))
  console.log((negetives / arr.length).toFixed(6))
  console.log(((arr.length - (positives + negetives)) / arr.length).toFixed(6))
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
