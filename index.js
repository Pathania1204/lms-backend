import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/db.js";
import userRouter from "./routers/userRoute.js";
dotenv.config();  
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
const startServer = async () => {
  await dbConnect(); 
  app.listen(8080, () => console.log("Server Started on 8080"));
};

startServer();