import e from "express";
import express from "express";
import { connect } from "http2";
import mysql from "mysql2/promise";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import connection from "./models/index.js";

const app = express();
app.use(express.json());
app.use("/user" , userRouter);

app.listen(8000 , async() => {
    console.log("Server started");
    try {
      await connection.authenticate();
      connection.sync();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
});