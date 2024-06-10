import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatApp");
    console.log("DB connected Successfully..");
  } catch (error) {
    throw error;
  }
};

export default connectToDB;
