const PORT = 8080; // default port 8080

const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieSession({
  name: 'session',
  keys: ["sEkrtKye"],

  maxAge: 24 * 60 * 60 * 1000,
  expires: new Date('2020')
}));



//Catch all paths not matches by other routes and render 404 error
app.use(function(req, res) {
  errorResponse(res, 404, 'error');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
