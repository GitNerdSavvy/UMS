import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const connectToMongo = async () => {
  const res = await mongoose.connect("mongodb://127.0.0.1:27017");
  if (res) {
    console.log("connected Successfully");
  }
};

export default connectToMongo;
