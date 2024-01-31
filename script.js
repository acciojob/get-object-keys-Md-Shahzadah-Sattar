//your JS code here. If required.
function sortObjectsByKey(arr, keyName, compareFunc) {
  // Do not console.log here
  // Just return the result
   return arr.sort((a,b) => {
       return compareFunc(a[keyName], b[keyName])
   })
}

const compareFunc = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};

const readline = require("readline");

const input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (cmd) {
  input.push(cmd);
});

rl.on("close", function (cmd) {
  Main(input);
});

function Main(input) {
  const arr = JSON.parse(input[0]);
  console.log(sortObjectsByKey(arr, input[1], compareFunc));
}