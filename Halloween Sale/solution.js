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
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER d
 *  3. INTEGER m
 *  4. INTEGER s
 */

function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let count = 0;
  let moneyLeft = s;
  while (moneyLeft >= p) {
    count += 1;
    moneyLeft -= p;
    ((p - d) >= m) ? p -= d : p = m;
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const p = parseInt(firstMultipleInput[0], 10);

  const d = parseInt(firstMultipleInput[1], 10);

  const m = parseInt(firstMultipleInput[2], 10);

  const s = parseInt(firstMultipleInput[3], 10);

  const answer = howManyGames(p, d, m, s);

  ws.write(answer + '\n');

  ws.end();
}
