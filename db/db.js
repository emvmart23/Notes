import mongoose from "mongoose";

const conection = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/crudNotes");
  } catch (error) {
    console.error(error.message);
  }
};

export default conection;