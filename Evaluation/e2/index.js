const express = require("express");
const cors = require("cors");
const moviesRoute = require("./route/movies.route");
const seriesRoute = require("./route/series.route");
const loggerMiddleware = require("./middleware/logger.middleware")
const validatorMiddleware = require("./middleware/validator.middleware")
const app = express();

app.use(cors());
app.use(express.json());
app.use(validatorMiddleware)
app.use(loggerMiddleware)
app.use(moviesRoute);
app.use(seriesRoute);

app.listen(8080, () => console.log("server is running"));
