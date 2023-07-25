import Foods from "../models/FoodModel.js";
import multer from 'multer';
import path from 'path';

// Set up multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'foods'); // Folder where the uploaded images will be saved
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const fileExtension = path.extname(file.originalname);
      cb(null, `${uniqueSuffix}${fileExtension}`);
    },
  });

// Set up multer upload instance
const upload = multer({ storage });

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
                food_id: req.params.id
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
 
// export const createFood = async (req, res) => {
//     try {
//       await Foods.create(req.body);
//       res.status(201).json({ msg: "Food Created" });
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };
  

export const createFood = async (req, res) => {
    try {
      const { food_name, food_price, food_desc, food_cat_id } = req.body;
      const food_image = req.file.originalname; // Get the filename of the uploaded image

      console.log("RRREEEQQQ", req.file)
  
      await Foods.create({
        food_name,
        food_price,
        food_desc,
        food_img: food_image, // Save the image filename in the 'food_img' column
        food_cat_id,
      });
  
      res.status(201).json({ msg: 'Food Created' });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

export const uploadFoodImage = (req, res) => {
    res.status(200).json({ filename: req.file.filename });
};
 
export const deleteFoodImage = (req, res) => {
    const filename = req.params.filename;
    const imagePath = path.join(__dirname, '../foods', filename);
  
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ msg: 'Image Deleted' });
      }
    });
};

export const updateFood = async (req, res) => {
  try {
    const { food_name, food_price, food_desc, food_cat_id, food_img } = req.body;

    await Foods.update(
      {
        food_name,
        food_price,
        food_desc,
        food_img,
        food_cat_id,
      },
      {
        where: {
          food_id: req.params.id,
        },
      }
    );

    res.status(200).json({ msg: 'Food Updated' });
  } catch (error) {
    console.log(error.message);
  }
}

// export const updateFood = async (req, res) => {
//     try {
//       const { food_name, food_price, food_desc, food_cat_id } = req.body;
//       const food_image = req.file ? req.file.filename : null; // Get the filename of the uploaded image
  
//       await Foods.update(
//         {
//           food_name,
//           food_price,
//           food_desc,
//           food_img: food_image, // Update the image filename in the 'food_img' column if a new image is uploaded
//           food_cat_id,
//         },
//         {
//           where: {
//             food_id: req.params.id,
//           },
//         }
//       );
  
//       res.status(200).json({ msg: 'Food Updated' });
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };

// export const updateFood = async(req, res) =>{
//     try {
//         await Foods.update(req.body,{
//             where:{
//                 food_id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "Food Updated"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }
 
export const deleteFood = async(req, res) =>{
    try {
        await Foods.destroy({
            where:{
                food_id: req.params.id
            }
        });
        res.status(200).json({msg: "Food Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const getFoodsCount = async (req, res) => {
    try {
        const count = await Foods.count();
        res.status(200).json({count});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: "Internal Server Error "});
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
