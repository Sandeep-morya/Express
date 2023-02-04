import express from "express";
import chalk from "chalk";
import { createReadStream, readFileSync, writeFile } from "fs";
import cors from "cors"

const app = express();


app.use(express.json()).use(cors())

app.get("/", (_, res) => {
	const stream_data = createReadStream("db.json", "utf-8");
	res.status(200);
	stream_data.pipe(res);
});

app.post("/", (req, res) => {
	console.log(req.body);
	const data = readFileSync("db.json", "utf-8");
	const parsed_data = JSON.parse(data);

	parsed_data.push({ id: 0, ...req.body }); //modifying
	const new_data = parsed_data.map((e, i) => ({ ...e, id: i + 1 })); //modifying

	writeFile("db.json", JSON.stringify(new_data), (_) => false);
	const final_res = {
		data: req.body,
		message: "Data Stored Successfully",
	};
	res.status(201).json(final_res);
});

app.patch("/:id", (req, res) => {
	const id = Number(req.params.id) - 1;
	const data = readFileSync("db.json", "utf-8");
	const parsed_data = JSON.parse(data);
	const target = parsed_data[id];

	if (target) {
		parsed_data[id] = { ...target, ...req.body }; //modifying
		const new_data = parsed_data.map((e, i) => ({ ...e, id: i + 1 }));
		writeFile("db.json", JSON.stringify(new_data), (_) => false);
		const final_res = {
			data: parsed_data[id],
			message: "Patch Operation Successful",
		};
		res.status(202).send(final_res);
	} else {
		res.status(304).send();
	}
});

app.patch("/:id", (req, res) => {
	const id = Number(req.params.id) - 1;
	const data = readFileSync("db.json", "utf-8");
	const parsed_data = JSON.parse(data);
	const target = parsed_data[id];

	if (target) {
		parsed_data[id] = req.body; //modifying
		const new_data = parsed_data.map((e, i) => ({ ...e, id: i + 1 }));
		writeFile("db.json", JSON.stringify(new_data), (_) => false);
		const final_res = {
			data: parsed_data[id],
			message: "Patch Operation Successful",
		};
		res.status(202).send(final_res);
	} else {
		res.status(304).send();
	}
});

app.delete("/:id", (req, res) => {
	const id = Number(req.params.id) - 1;
	const data = readFileSync("db.json", "utf-8");
	const parsed_data = JSON.parse(data);
	const target = parsed_data[id];
	if (target) {
		const final_res = {
			data: parsed_data.splice(id, 1),
			message: "Delete Operation Successful",
		};
		const new_data = parsed_data.map((e, i) => ({ ...e, id: i + 1 }));
		writeFile("db.json", JSON.stringify(new_data), (_) => false);
		res.status(202).send(final_res);
	} else {
		res.status(304).send();
	}
});

app.listen(3000, () =>
	console.log(chalk.red("Server started on http://localhost:3000/")),
);
