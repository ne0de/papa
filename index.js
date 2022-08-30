const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3001);
app.set('view engine', 'html');

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(app.get("port"), () =>
  console.log("listening on port a" + app.get("port"))
);
