const dotenv = require("dotenv");
const connectToDb = require("./src/database/connect");
const UserModel = require("./src/models/user.model");
const express = require("express");
const app = express();
const port = 8080;

dotenv.config();
connectToDb();

app.use(express.json());
app.use(express.static(__dirname + "/src/public"));
app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/", async (req, res) => {
	const users = await UserModel.find({});
	res.render("index", { users });
});

app.get("/users", async (req, res) => {
	try {
		const users = await UserModel.find({});
		res.status(200).send(users);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

app.get("/users/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const user = await UserModel.findById(id);
		return res.status(200).json(user);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

app.post("/users", async (req, res) => {
	try {
		const user = await UserModel.create(req.body);
		res.status(201).json(user);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

app.patch("/users/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
		res.status(200).json(user);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

app.delete("/users/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const user = await UserModel.findByIdAndRemove(id);
		res.status(200).json(user);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

app.listen(port, () => console.log(`Server is running on port ${port}!`));
