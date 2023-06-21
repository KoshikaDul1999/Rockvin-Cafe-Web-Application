import Foods from "../models/FoodModel.js";

export const getFoods = async(req, res) =>{
    try {
        const response = await Foods.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getFoodById = async(req, res) =>{
    try {
        const response = await Foods.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getFoodByName = async(req, res) =>{
    try {
        const response = await Foods.findOne({
            where:{
                food_name: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createFood = async(req, res) =>{
    try {
        await Foods.create(req.body);
        res.status(201).json({msg: "Food Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateFood = async(req, res) =>{
    try {
        await Foods.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Food Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteFood = async(req, res) =>{
    try {
        await Foods.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Food Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

// const Food = require('./models/food');
// const Category = require('./models/category');
// const multer = require('multer');

// // Set up multer for handling file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Specify the destination folder for storing uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '_' + file.originalname); // Generate a unique filename for the uploaded file
//   },
// });

// const upload = multer({ storage });

// // Endpoint for uploading a product with an image
// app.post('/upload', upload.single('food_image'), async (req, res) => {
//   try {
//     // Retrieve the form data from the request body
//     const { food_id, food_name, food_price, food_desc, food_category } = req.body;

//     // Get the uploaded image filename from the request file
//     const food_image = req.file.filename;

//     // Find the category by its name in the Category table
//     const category = await Category.findOne({ name: food_category });

//     // Create a new Food document with the form data
//     const food = new Food({
//       food_id,
//       food_name,
//       food_price,
//       food_image,
//       food_desc,
//       food_category: category._id, // Assign the category's ID to the food_category field
//     });

//     // Save the food document to the database
//     await food.save();

//     res.status(201).json({ msg: 'Food Created' });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
