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
    // sending our name to the server
    conn.write('Name: KEN');
  });
  return conn;
};

module.exports = {
  connect
};
