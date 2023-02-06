const validator = (req, res, next) => {
	console.log("va");
	if (req.method === "PATCH" || req.method === "DELETE") {
		if (req.query.password == 5567 && req.query.role == "admin") {
			next();
		} else {
			res.status(401).send("You are not authorised to do this operation");
		}
	} else {
		next();
	}
};
module.exports = validator;
