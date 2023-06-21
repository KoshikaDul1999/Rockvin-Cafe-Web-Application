import Admins from "../models/AdminModel.js";
 
export const getAdmins = async(req, res) =>{
    try {
        const response = await Admins.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getAdminById = async(req, res) =>{
    
    try {
        const response = await Admins.findOne({
            where:{
                sysusr_id : req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// export const getAdminByEmail = async (req, res) => {
//     try {
//       const response = await User.findOne({
//         where: {
//           admin_email: req.params.id,
//         },
//       });
//       res.status(200).json(response);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
 
export const createAdmin = async(req, res) =>{
    try {
        await Admins.create(req.body);
        res.status(201).json({msg: "Admin Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateAdmin = async(req, res) =>{
    try {
        await Admins.update(req.body,{
            where:{
                sysusr_id: req.params.id
            }
        });
        res.status(200).json({msg: "Admin Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteAdmin = async(req, res) =>{
    try {
        await Admins.destroy({
            where:{
                sysusr_id: req.params.id
            }
        });
        res.status(200).json({msg: "Admin Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}