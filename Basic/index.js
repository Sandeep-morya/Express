const express = require("express");
const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/file.json`, "utf-8");

const app = express();

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET");
	next();
});

app.get("/", (req, res) => {
	res.send("Welocome on My Server");
});

app.get("/api", (req, res) => {
	res.send(data);
});

app.get("/page", (req, res) => {
	res.sendFile(`${__dirname}/dummy.html`);
});
app.listen(3000, () => console.log("Server ready"));
