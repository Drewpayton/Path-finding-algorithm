const express = require('express');
const app = express();
const path = require('path')

const PORT = process.env.PORT ||  2000;

app.use("/public", express.static(__dirname + "/public"))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/index.html")))






app.listen(PORT, () => console.log(`server has started on http://localhost:${PORT}`))