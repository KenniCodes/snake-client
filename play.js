const { connect } = require('./client');
const move = {
  up: "Move: up"
}
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = () => {
  stdin.on("data", handleUserInput);
  if (key === '\u0003') {
    process.exit();
  };
};

console.log("Connecting ...");
connect();