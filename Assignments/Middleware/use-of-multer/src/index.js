import express from "express";
import print from "colorprint-js";
import fs, { readFileSync } from "fs";
import cors from "cors";
import multer from "multer";
import { join } from "path";

// const upload = multer({ storage: storage });
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const path = "uploads/"+file.originalname;
		fs.mkdirSync(path, { recursive: true });
        fs.writeFile(path+"/db.json",JSON.stringify(req.body),()=>true)
		cb(null, path);
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname);
	},
});



const upload = multer({ storage });
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static("src/public"));

app.post("/files", upload.array("images"), function (req, res) {
	// req.file is the name of your file in the form above, here 'uploaded_file'
	// req.body will hold the text fields, if there were any
	console.log(req.files, "body", req.body);
	res.redirect("/");
});

app.get('/images',(req,res)=>{
    const data = fs.readFileSync("uploads/logo-min.png/images","7bit");
    res.send(data)
})

app.listen(3000, () => print.bCyan("Server is running on 3000"));
