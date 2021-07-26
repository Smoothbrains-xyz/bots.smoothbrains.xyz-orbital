const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + "/static"));

const port = process.env.PORT || 8000;

app.set('view engine', 'pug');

app.get("/orbital", async (req, res) => {
  return res.render('index');
});

app.get("/static", async (req, res) => {
  return res.send(__dirname + "/static");
})

app.get("/favicon.ico", async (req, res) => {
  return res.sendFile(__dirname + "/static/favicon.ico");
})

app.listen(8000, () => {
  console.log("Running on port 8000!");
});
