const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors('{"origin": "*", "methods": "GET"}'));

const http = require("http");
const server = http.createServer(app);

const router = express.Router();

// I.e.: http(s)://<subdomain>.codesandbox.io/api/number?max=20
router.get("/number", (req, res) =>
  res.json(Math.floor(Math.random() * Math.floor(req.query.max)))
);

// I.e.: http(s)://<subdomain>.codesandbox.io/api/numbers
router.get("/numbers", function (req, res) {
  let array = [];
  for (let i = 1; i <= 50; i++) {
    array.push(i);
  }
  res.json(array);
});

app.use("/api", router);
server.listen(8080);
