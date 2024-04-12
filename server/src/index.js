import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import { recipesRouter } from "./routes/recipes.js";
import { userRouter } from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb://localhost:27017/recipes",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("Server started !"));
