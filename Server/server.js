import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./Config/db.config.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.get("/", (req, res) => res.json({ message: "Welcome to our Service" }));
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
  })
  .catch((err) => console.log("ERR! While Starting the Server", err));
