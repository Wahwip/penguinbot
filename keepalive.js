const express = require("express");
const app = express();
const port = 3005;

app.get('/', (req, res) => res.send("WebServer is online."))

app.listen(port, () => console.log("WebServer is online now."));