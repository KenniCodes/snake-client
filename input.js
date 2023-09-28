const stdin = process.stdin;
let connection;
const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const keyMap = {
  '\u0003': () => process.exit(),
  '\u0077': () => {
    console.log("Move: up");
    connection.write("Move: up");
  },
  '\u0073': () => {
    console.log("Move: down");
    connection.write("Move: down");
  },
  '\u0061': () => {
    console.log("Move: left");
    connection.write("Move: left");
  },
  '\u0064': () => {
    console.log("Move: right");
    connection.write("Move: right");
  },
  '\u0062': () => {
    connection.write("Say: OMG!!");
  },
  '\u0066': () => {
    connection.write("Say: Ahhh!!");
  }
};
const handleUserInput = (key) => {
  const control = keyMap[key];
  if (control) {
    control();
  }
};
stdin.on("data", handleUserInput);

module.exports = {
  setupInput
};
