const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minLength: 6,
	},
	active: {
		type: Boolean,
		required: true,
	},
	dateCreated: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
