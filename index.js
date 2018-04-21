const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/static", express.static(path.resolve(__dirname, "public")));
app.get("/", (req, res) => res.render("index"));
app.listen(port, () => console.log("Example app listening on port 3000"));
