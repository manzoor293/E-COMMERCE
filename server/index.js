import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

import connectDB from "./config/connectDB.js";

const app = express();
app.use(cors());
app.options("/{*splat}", cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

const PORT = 8080 || process.env.PORT;

app.get("/", (request, response) => {
  // server to
  response.json({
    message: "Server is running " + process.env.PORT,
  });
});

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server running on port ", process.env.PORT);
  });
});
