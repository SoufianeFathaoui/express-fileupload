const express = require("express");
const upload = require("express-fileupload");
const app = express();
const port = 3000;

app.use(upload());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.files.sfn.name);
  const fileName = req.files.sfn.name
  req.files.sfn.mv("./"+fileName ,(err) => {
    res.send("file uploaded succefully")
  }
  )
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
