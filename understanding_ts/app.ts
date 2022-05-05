//set type of return value
// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }

//if there is no special reason, let Typescript infer return value type
function add(n1: number, n2: number) {
  return n1 + n2;
}

// void type, means that a function doesn't return anything
//not necessary to write it down like
// function printResult(num: number): void {
//   console.log("Result " + num);
// }

function printResult(num: number) {
  console.log("Result " + num);
}

printResult(add(5, 12));
