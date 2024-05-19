const Admin = require("../../models/Admin");

const readAdmin = async(req,res)=>{
    try{
        const response =await Admin.find();

        res.status(200).json({msg:'Data fetched successfull', data:response});
    }
    catch(err){
        res.status(500).json({msg:'Internal server error'});
    }
};

module.exports = readAdmin;