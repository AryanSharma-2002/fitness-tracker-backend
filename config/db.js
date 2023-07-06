const mongoose = require("mongoose");
const dbName = "tracker";

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
