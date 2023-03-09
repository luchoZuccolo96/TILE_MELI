import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = () => {
	mongoose
		.connect(process.env.MONGO)
		.then(() => {
			console.log("Connected to DB");
		})
		.catch((err) => {
			throw err;
		});
};

app.listen(3001, () => {
	connect();
	console.log("Server is running on port 3001");
});
