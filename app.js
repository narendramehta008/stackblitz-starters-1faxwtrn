
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;


//load static files
app.use(express.static("./"));
//startup file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); //index.html
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
