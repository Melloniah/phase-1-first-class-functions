function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("Hello from namedFunction!");
  };
}

const returnsAnAnonymousFunction = () => () => {
  console.log("I am an anonymous function!");
};
