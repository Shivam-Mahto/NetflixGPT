import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Successfully connected to the database: ${db.connection.host}`
    );
  } catch (err) {
    console.log("Error in connecting to the databse: ", err);
  }
};

export default connectDB;
