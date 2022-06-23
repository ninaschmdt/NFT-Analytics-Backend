const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("You got this!");
});

app.listen(port, () => {
  console.log(`forest gump is running at the speed of ${port} mph`);
});
