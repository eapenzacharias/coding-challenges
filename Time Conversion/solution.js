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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let hour = parseInt(s.slice(0, 2))
  const minSec = s.slice(3, 8)
  if (s[s.length - 2] == 'P') {
    if (hour === 12) {
      return (`${hour}:${minSec}`)
    } else {
      return (`${hour + 12}:${minSec}`)
    }
  }
  else if (s[s.length - 2] == 'A') {
    if (hour === 12) {
      return (`00:${minSec}`)
    } else {
      return (`${s.slice(0, 2)}:${minSec}`)
    }
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
