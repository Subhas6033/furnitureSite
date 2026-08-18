import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import reviewRouter from "./Routes/review.routes.js";
import { adminRoutes } from "./Routes/admin.routes.js";

console.log("CORS:", process.env.CORS_ORIGIN);

const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,

  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
  ],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],
};

app.use(cors(corsOptions));

app.use(
  express.json({
    limit: "100kb",
  })
);

app.use(
  express.urlencoded({
    limit: "50kb",
    extended: true,
  })
);

app.use(cookieParser());

app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/admin", adminRoutes);

export { app };