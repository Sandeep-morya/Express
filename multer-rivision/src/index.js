const express = require("express");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const path = `uploads/${file.fieldname}`;
		fs.mkdirSync(path, { recursive: true });
		cb(null, path);
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + file.originalname);
	},
});

const app = express();
const upload = multer({ storage });

app.use(express.static("src/public"));
app.use("/uploads/images", express.static("uploads/images"));

/* use name of inputField (input-type-file) */
app.post("/upload", upload.single("images"), (req, res) => {
	let response = '<a href="/">Home</a><br>';
	response += "Files uploaded successfully.<br>";
	response += `<img src="${req.file.path}" /><br>`;
	const data = JSON.parse(fs.readFileSync("uploads/data.json", "utf-8"));
	const newEntry = {
		id: 0,
		title: req.body.title,
		caption: req.body.caption,
		path: req.file.path,
	};
	data.push(newEntry);
	const final_data = data.map((entry, index) => ({ ...entry, id: index + 1 }));
	fs.writeFile("uploads/data.json", JSON.stringify(final_data), () => null);
	res.send(response);
});

app.post("/uploads", upload.array("images"), (req, res) => {
	let response = '<a href="/">Home</a><br>';
	response += "Files uploaded successfully.<br>";
	const data = JSON.parse(fs.readFileSync("uploads/data.json", "utf-8"));
	const fileNames = [];
	req.files.forEach((file) => {
		response += `<img src="${file.path}" /><br>`;
		fileNames.push(file.path);
	});
	const newEntry = {
		id: 0,
		title: req.body.title,
		caption: req.body.caption,
		path: fileNames,
	};
	data.push(newEntry);
	const final_data = data.map((entry, index) => ({
		...entry,
		id: index + 1,
	}));
	fs.writeFile("uploads/data.json", JSON.stringify(final_data), () => null);
	res.send(response);
});

app.listen(3000, () => console.log("Server is running on 3000"));
