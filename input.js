const stdin = process.stdin;
let connection;
const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0077') {
    console.log("Move: up");
    connection.write("Move: up");
  } else if (key === '\u0073') {
    console.log("Move: down");
    connection.write("Move: down");
  } else if (key === '\u0061') {
    console.log("Move: left");
    connection.write("Move: left");
  } else if (key === '\u0064') {
    console.log("Move: right");
    connection.write("Move: right");
  } else if (key === '\u0062') {
    connection.write("Say: OMG!!");
  } else if (key === '\u0066') {
    connection.write("Say: Ahhh!!");
  }
};
stdin.on("data", handleUserInput);

module.exports = {
  setupInput
};
