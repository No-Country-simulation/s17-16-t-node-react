import mongoose from "mongoose";

const connectDB = async () => {
  console.log(`🔍 Checking 🛢️  database 🧮 connection...`);
  try {
    await mongoose.connect(`${process.env.URL_MONGO} ${process.env.DB_TEST_MONGO}`);
    console.log("✅ DB 🆗 is conncested 💯 succesfully. ");
  } catch (error) {
    console.log("Unable to connect to the database: ");
    console.log(error.message);
  }
};

export default connectDB;
