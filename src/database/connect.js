const mongoose = require("mongoose");
const connectToDb = async () => {
	await mongoose
		.connect(
			`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@usersmanagementdatabase.tb3bzcy.mongodb.net/?retryWrites=true&w=majority`
		)
		.then(console.log("Successfully connected"))
		.catch((error) =>
			console.log(`An error occurred while establishing a connection: ${error}`)
		);
};

module.exports = connectToDb;
