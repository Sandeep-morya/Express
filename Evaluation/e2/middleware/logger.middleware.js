const fs = require("fs");
const logger = (req, _, next) => {
	const log = `Method: ${req.method} | Route: ${req.url} | user-agent: ${req.headers["user-agent"]}\n`;
	fs.appendFile("log.txt", log, (err) => false);
	next();
};
module.exports = logger;
