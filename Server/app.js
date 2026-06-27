import express from "express";
import cors from "cors";
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

export { app };
