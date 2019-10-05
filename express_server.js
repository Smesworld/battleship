const PORT = 8080; // default port 8080

const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');

const Battleship = require('./battleship');

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));
app.use(methodOverride('_method'));
app.use(cookieSession({
  name: 'session',
  keys: ["sEkrtKye"],

  maxAge: 24 * 60 * 60 * 1000
}));

const game = new Battleship();

app.get("/game", (req, res) => {
  const b = game.board;
  res.render("game_index", {b});
});

app.post("/game", (req, res) => {
  // player.shot([req.body.col, req.body.row]);

  res.redirect("/game");
});

//Catch all paths not matches by other routes and render 404 error
// app.use(function(req, res) {
//   errorResponse(res, 404, 'error');
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
