const app = require("./app");
const http = require("http").createServer(app);
const config = require("./src/utils/config");
const { dB } = require("./src/database/authDataBase");

const PORT = config.port;
console.log("config object", config);

dB.auth();

http.listen(PORT, () => {
  console.log(`Express App Service is running on port ${PORT}`);
});
