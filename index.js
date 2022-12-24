/*
 * Primary file for the project
 *
 */

const http = require("http");

const server = http.createServer((req, res) => {
  res.end(`Hello World!\n`);
});

server.listen(3000, () => {
  console.log(`server is listening on port ${3000}`);
});
