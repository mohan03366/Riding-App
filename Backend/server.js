const http = require("http");
const { initializeSocket } = require("./socket");

const app = require("./app");

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server is listening on the ports http://localhost:${PORT}`);
  initializeSocket(server);
});
