import dotenv from "dotenv";
import connectDB from "./db/db.js";
import express from "express";
import cors from "cors";
import users from "./routes/users.route.js";

dotenv.config({
  path: "../env",
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", users);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port : ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("Error : ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection failed ! ", err);
  });
