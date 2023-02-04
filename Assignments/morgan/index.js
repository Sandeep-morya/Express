const express = require("express");
const morgan = require("morgan");
const print = require("colorprint-js");

const app = express();
const PORT = 8080;
//app.use(morgan(`:date`))
// app.use(morgan(`:date[clf]`)) //formats
// app.use(morgan(`:date | :method`))
// app.use(morgan(`:date[iso] | :method | :url`))
// app.use(morgan(`:remote-addr | :remote-user`));
// app.use(morgan(`:method | :status`))
// app.use(morgan(`:res[content-length]`)); /* The lengthof the response that you are sending */
// app.use(morgan(`:response-time ms`)) //in miliseconds
// app.use(morgan(`HTTP/:http-version \n`))

/* predefined configs */

// app.use(morgan('tiny')) //  :method :url :status :res[content-length] - :response-time ms

// app.use(morgan('dev'))  //  :method :url :status :response-time ms - :res[content-length]

// app.use(morgan('short'))
//:remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms

// app.use(morgan(`common`))
//:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]

// app.use(morgan(`combined`))
//:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"

const custom_morgan_object = morgan((tokens, req, res) =>
	[
		tokens.method(req, res),
		tokens.status(req, res),
		tokens.res(req, res, "content-length"),
		tokens["response-time"](req, res) + " ms",
		tokens.date(req, res, "clf"),
		"HTTP/" + tokens["http-version"](req, res),
		tokens.url(req, res),
		tokens["user-agent"](req, res),
		/* etc... */
	].join(" | "),
);

app.use(custom_morgan_object);

// or

app.use(
	morgan(
		`:method | :status | :res[content-length] | :response-time ms | :date[clf] | HTTP/:http-version | :url | :user-agent`,
	),
);

app.get("/", (req, res) => {
	res.status(200).json({ message: "Have a nice day! Sandeep" });
});

app.listen(PORT, () =>
	print.bCyan(`Server is runnig on http://localhost:${PORT}`),
);
