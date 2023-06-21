import express from "express";
import cors from "cors";
import router from "./routes/MainRouter.js";
import { fileURLToPath } from "url";
import path from "path";
import db from "./config/Database.js";
import Category from "./models/CategoryModel.js";
import Foods from "./models/FoodModel.js"; 
import OfferFoods from "./models/OfferFoodModel.js";
import RecomendedFoods from "./models/RecomendedFoodModel.js";
import OrderDetails from "./models/OrderDetailsModel.js";
import Chefs from "./models/ChefModel.js";
import Admins from "./models/AdminModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
    try {
      await db.sync(); // This will create/update tables based on the model definitions
      console.log("Tables created/updated successfully");
  
      // Start the server
      app.listen(5000, () => console.log("Server up and running..."));
    } catch (error) {
      console.error("Error synchronizing tables:", error);
    }
  })();

//app.listen(5000, () => console.log("Server up and running..."));
