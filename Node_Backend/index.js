import express from "express";
import cors from "cors";
import router from "./routes/FoodRoutes.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.use(cors());
app.use(express.json());
app.use(router);


app.listen(5000, () => console.log("Server up and running..."));
