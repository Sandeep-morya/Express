import express from "express";
import cors from "cors";
import validation from "./middlewares/validation.js";

const app = express();

app.use(cors()); //external middleware
app.use(express.json()); // internal middleware

app.use(validation); //user-defined middleware

app.listen(7000, () => console.log("Server started on http://localhost:7000/"));
