import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(urlencoded());
app.use(cookieParser());
app.use(express.static("public"));

app.route("/api/v1/registeruser", userRouter);
export default app;
