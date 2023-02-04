const { Router } = require("express");

const home = Router();

home.get("/", (req, res) => {
	res.status(200).send("You are at the Homepage");
});

home.post("/",(req,res)=>{
    res.status(201).send(req.body)
})

module.exports = home;
