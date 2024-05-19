const Admin = require("../../models/Admin");


const regAdmin = async(req,res)=>{
    try{

        const userdata = req.body;
        // console.log(userdata);
        const data = new Admin(userdata);
    
        const response = await data.save();
    
        res.status(200).json({msg:'Admin register successfull', data: response});
    }
    catch(error)
    {
        console.log(error);

        res.status(500).json({msg:'Internal server error'});
    }
};

module.exports = regAdmin;