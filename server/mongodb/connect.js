import mongoose from "mongoose";

const connectDB = () => {
	mongoose.set("strictQuery", true);

	mongoose
		.connect(process.env.MONGODB_URL, { dbName: process.env.DB_NAME })
		.then(() => console.log("MongoDB connected!"))
		.catch((err) => console.log("mongoDB error---", err));
};

export default connectDB;
