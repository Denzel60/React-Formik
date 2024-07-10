import express from "express";
import usersRouter from "./routes/user.routes.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/users", usersRouter);

app.listen(3011, () => {
  console.log("Server running on port 3006");
});
