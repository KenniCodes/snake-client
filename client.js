const net = require("net");
// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  // receives incoming data
  conn.on('data', (data) => {
    console.log(data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  // send connection successful message when connection is established
  conn.on('connect', () => {
    console.log('Connection successful');
    // send message to server to move when connected
    // conn.write('Move: up');
    // setInterval(() => {
    //   conn.write('Move: right');
    // }, 50);
  });
  // sending our name to the server
  process.stdin.on('data', (input) => {
    conn.write(`Name: ${input}`);
  });

  return conn;
};

module.exports = {
  connect
};

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)