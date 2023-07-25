import User from "../models/UserModel.js";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                userid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                userid: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                userid: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const getCustomersCount = async (req, res) => {
    try {
        const count = await User.count();
        res.status(200).json({count});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: "Internal Server Error "});
    }
}


// import User from "../models/UserModel.js";

// export const validatePhoneNumber = (phoneNumber) => {
//     var phoneno = /^\d{10}$/;
//     if (phoneNumber.match(phoneno)) {
//       return true;
//     } else {
//       return false;
//     }
// };

// export const validateEmailAddress = (email) => {
//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     return validRegex.test(email);
// };

// export const getUsers = async (req, res) => {
//   try {
//     const response = await User.findAll();
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const getUserById = async (req, res) => {
//   try {
//     const response = await User.findOne({
//       where: {
//         userid: req.params.id,
//       },
//     });
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const createUser = async (req, res) => {
//   try {
//     // Validate phone number and email address before creating the user
//     if (!validatePhoneNumber(req.body.phoneno)) {
//       res.status(400).json({ error: "Invalid phone number" });
//       return;
//     }

//     if (!validateEmailAddress(req.body.emailaddress)) {
//       res.status(400).json({ error: "Invalid email address" });
//       return;
//     }

//     await User.create(req.body);
//     res.status(201).json({ msg: "User Created" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// export const updateUser = async (req, res) => {
//   try {
//     // Validate phone number and email address before updating the user
//     if (!validatePhoneNumber(req.body.phoneno)) {
//       res.status(400).json({ error: "Invalid phone number" });
//       return;
//     }

//     if (!validateEmailAddress(req.body.emailaddress)) {
//       res.status(400).json({ error: "Invalid email address" });
//       return;
//     }

//     await User.update(req.body, {
//       where: {
//         userid: req.params.id,
//       },
//     });
//     res.status(200).json({ msg: "User Updated" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// export const deleteUser = async (req, res) => {
//   try {
//     await User.destroy({
//       where: {
//         userid: req.params.id,
//       },
//     });
//     res.status(200).json({ msg: "User Deleted" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// export const getCustomersCount = async (req, res) => {
//   try {
//     const count = await User.count();
//     res.status(200).json({ count });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };