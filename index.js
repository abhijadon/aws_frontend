require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();
fs = require("fs");
qs = require("querystring");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({ origin: ["http://localhost:3000", "https://doc.university360.co/"] })
);

//production build react
const path = require("path");
app.use(express.static(path.resolve(__dirname, "frontend", "build")));
app.set("views", __dirname + "/frontend");
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("index.html");
});

app.set("views", __dirname + "/public");
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("dataFrom.html");
});
//Api routes are available
app.use("/api", require("./routes/email"));
app.use("/api", require("./routes/sheet"));
app.use("/api", require("./routes/form"));

//connect to localhost
app.listen(PORT, () => {
  console.warn(`Connected to app at http://localhost:${PORT} successfully`);
});
