const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json({ extended: true }));

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/meetings", require("./routes/meetings.routes"));

app.use(express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

const PORT = process.env.PORT || config.get("port");

function onRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write();
}

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();

app.listen(process.env.PORT || config.get("port"), () => {
  console.log(`App has been started on port ${PORT}...`);
});
