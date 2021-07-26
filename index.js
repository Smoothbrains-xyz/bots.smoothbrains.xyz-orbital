const app = require("express")();

app.get("/orbital", async (req, res) => {
  return res.send("<h1>HELLO!</h1>");
});

app.listen(8000, () => {
  console.log("Running on port 8000!");
});
