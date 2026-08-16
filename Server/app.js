import dotenv from "dotenv"
dotenv.config({})

import express from "express";
import cors from "cors";
import reviewRouter from "./Routes/review.routes.js"
import {adminRoutes} from "./Routes/admin.routes.js"
console.log("CORS", process.env.CORS_ORIGIN)
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(
  express.json({
    limit: "100kb",
  }),
);

app.use(
  express.urlencoded({
    limit: "50kb",
    extended: true,
  }),
);

app.use("/api/v1/review", reviewRouter)
app.use("/api/v1/admin", adminRoutes)

export { app };
