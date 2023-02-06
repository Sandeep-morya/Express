const express = require("express");
const fs = require("fs");
const movies = express.Router();

movies.get("/movies", (req, res) => {
	const { movies } = JSON.parse(fs.readFileSync("db.json", "utf-8").trim());
	res.status(200).send(movies);
});

movies.get("/movies/:id", (req, res) => {
	const { movies } = JSON.parse(fs.readFileSync("db.json", "utf-8").trim());
	const _id = req.params.id;
	let target;
	for (let el of movies) {
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

movies.post("/movies", (req, res) => {
	const data = JSON.parse(fs.readFileSync("db.json", "utf-8").trim());
	const body = req.body;
	if (body.id) {
		data.movies.push(req.body);
		fs.writeFileSync("db.json", JSON.stringify(data));
		res.status(201).send(req.body);
	} else {
		res.status(403).send();
	}
});

movies.patch("/movies/:id", (req, res) => {
	const data = JSON.parse(fs.readFileSync("db.json", "utf-8").trim());
	const _id = req.params.id;
	const found = [];
	data.movies = data.movies.map((e) => {
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

movies.delete("/movies/:id", (req, res) => {

	const data = JSON.parse(fs.readFileSync("db.json", "utf-8").trim());
	const _id = req.params.id;
	const found = [];
	data.movies = data.movies.filter((e) => {
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

module.exports = movies;
