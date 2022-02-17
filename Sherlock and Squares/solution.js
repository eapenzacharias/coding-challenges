'use strict';

const fs = require('fs');

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
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
  // Write your code here
  let count = 0
  let i = Math.floor(Math.sqrt(a))
  while (i * i <= b) {
    if (i * i >= a) count++
    i++
  }
  return count
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const a = parseInt(firstMultipleInput[0], 10);

    const b = parseInt(firstMultipleInput[1], 10);

    const result = squares(a, b);

    ws.write(result + '\n');
  }

  ws.end();
}
