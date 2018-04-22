const express = require("express");
const app = express();
const http = require("http").Server(app);
const port = process.env.PORT || 3000;
const path = require("path");
const io = require("socket.io")(http);

app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/static", express.static(path.resolve(__dirname, "public")));
app.get("/", (req, res) => res.render("index"));

io.sockets.on("connection", function(socket) {
  console.log(" a user connected");
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

http.listen(port, () => console.log("App listening on port 3000"));
