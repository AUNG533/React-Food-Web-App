import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://hongzar:hzfd1234@cluster0.rde0h.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
