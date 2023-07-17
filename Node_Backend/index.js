import express from "express";
import cors from "cors";
import multer from "multer";
import router from "./routes/MainRouter.js";
import { fileURLToPath } from "url";
import path from "path";
import db from "./config/Database.js";
import Category from "./models/CategoryModel.js";
import Foods from "./models/FoodModel.js";
import OrderDetails from "./models/OrderDetailsModel.js";
import User from "./models/UserModel.js";
import SystemUsers from "./models/SystemUserModel.js";
//import Chefs from "./models/ChefModel.js";
//import Admins from "./models/AdminModel.js";
//import OfferFoods from "./models/OfferFoodModel.js";
//import RecomendedFoods from "./models/RecomendedFoodModel.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../FrontEnd"))); // Serve the frontend files

// Create a storage object for multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../foods'),
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fileExtension = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${fileExtension}`);
  },
});

// Create the multer upload instance
const upload = multer({ storage });

// Define the /upload route
app.post("/upload", upload.single("food_image"), (req, res) => {
  // Handle the file upload
  const file = req.file;
  if (!file) {
    // No file uploaded
    res.status(400).json({ error: "No file uploaded" });
  } else {
    // File uploaded successfully
    res.status(200).json({ filename: file.filename });
  }
});

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
