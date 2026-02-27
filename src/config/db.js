const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully✅");
    // console.log("MONGO_URI:", process.env.MONGO_URI);
  } catch (error) {
    console.log("Database connection failed ❌", error);
    process.exit(1);
  }

  console.log("Full URI:", process.env.MONGO_URI);
console.log("Connected DB:", mongoose.connection.name);
};

module.exports = connectDB;
