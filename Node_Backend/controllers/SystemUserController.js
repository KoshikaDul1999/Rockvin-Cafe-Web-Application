import SystemUsers from "../models/SystemUserModel.js";
 
export const getAdmins = async(req, res) =>{
    try {
        const response = await SystemUsers.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getAdminById = async(req, res) =>{
    
    try {
        const response = await SystemUsers.findOne({
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
        await SystemUsers.create(req.body);
        res.status(201).json({msg: "SystemUser Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateAdmin = async(req, res) =>{
    try {
        await SystemUsers.update(req.body,{
            where:{
                sysusr_email: req.params.id
            }
        });
        res.status(200).json({msg: "SystemUser Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteAdmin = async(req, res) =>{
    try {
        await SystemUsers.destroy({
            where:{
                sysusr_id: req.params.id
            }
        });
        res.status(200).json({msg: "SystemUser Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}