const express = require("express");
const fs = require("fs");
const series = express.Router();
series.get("/series", (req, res) => {
	const { series } = JSON.parse(fs.readFileSync("db.json", "utf-8").trim());
	res.status(200).send(series);
});

series.get("/series/:id", (req, res) => {
	const { series } = JSON.parse(fs.readFileSync("db.json", "utf-8").trim());
	const _id = req.params.id;
	let target;
	for (let el of series) {
		if (el.id == _id) {
			target = el;
			break;
		}
	}
	if (target) {
		res.status(200).send(target);
	} else {
		res.status(404).send();
	}
});

series.post("/series", (req, res) => {
	const data = JSON.parse(fs.readFileSync("db.json", "utf-8").trim());
	const body = req.body;
	if (body.id) {
		data.series.push(req.body);
		fs.writeFileSync("db.json", JSON.stringify(data));
		res.status(201).send(req.body);
	} else {
		res.status(403).send();
	}
});

series.patch("/series/:id", (req, res) => {
	const data = JSON.parse(fs.readFileSync("db.json", "utf-8").trim());
	const _id = req.params.id;
	const found = [];
	data.series = data.series.map((e) => {
		if (e.id == _id) {
			found[0] = true;
			found[1] = { ...e, ...req.body };
			return found[1];
		} else {
			return e;
		}
	});
	if (found[0]) {
		fs.writeFileSync("db.json", JSON.stringify(data));
		res.status(201).send(found[1]);
	} else {
		res.status(304).send();
	}
});

series.delete("/series/:id", (req, res) => {
	const data = JSON.parse(fs.readFileSync("db.json", "utf-8").trim());
	const _id = req.params.id;
	const found = [];
	data.series = data.series.filter((e) => {
		if (e.id == _id) {
			found[0] = true;
			found[1] = e;
		}
		return e.id != _id;
	});

	if (found[0]) {
		fs.writeFileSync("db.json", JSON.stringify(data));
		res.status(201).send(found[1]);
	} else {
		res.status(304).send();
	}
});
module.exports = series;
