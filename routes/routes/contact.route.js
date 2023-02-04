const { Router } = require("express");

const contact = Router();

contact.get("/", (req, res) => {
	res.status(200).send("You are at the Contactpage");
});
contact.get("/:id", (req, res) => {
	res
		.status(200)
		.send("You have request at the Contactpage for id:" + req.params.id);
});
contact.post("/", (req, res) => {
	res.status(201).send(req.body);
});

module.exports = contact;
