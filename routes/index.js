const express = require("express");
const home = require("./routes/home.route")
const contactRoute = require("./routes/contact.route")

const app = express();
app.use(express.json())
app.use(home);
app.use("/contact",contactRoute)

app.listen(3000, ()=>console.log("Server Started"))