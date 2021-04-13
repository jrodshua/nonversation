const config = require("./config");
const express = require("express");
const path = require("path");
const { videoToken } = require("./token");

const PORT = process.env.PORT || 4005;

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const sendTokenRes = (token, res) => {
  res.set("Content-Type", "application/json");
  res.send(
    JSON.stringify({
      token: token.toJwt(),
    })
  );
};

app.get("/chat/token", (req, res) => {
  const identity = req.query.identity;
  const room = req.query.room;
  const token = videoToken(identity, room, config);
  sendTokenRes(token, res);
});

app.post("/chat/token", (req, res) => {
  const identity = req.body.identity;
  const room = req.body.room;
  const token = videoToken(identity, room, config);
  sendTokenRes(token, res);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server is listening on localhost:${PORT}`));
