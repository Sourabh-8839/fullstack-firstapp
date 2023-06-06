
const detail = require('../models/form');


exports.getDetails =async(req,res)=>{
    
    const response=await detail.findAll();

    res.send(response);



    
};

exports.postDetails =async(req,res)=>{

    try {
        console.log(JSON.stringify(req.body));

        const userName= req.body.userName;
        const phNum = req.body.phNum;
        const email = req.body.email;
    
        const p = await detail.create({
            userName:userName,
            phoneNumber:phNum,
            email:email
        });
        
        res.send(p);
    } catch (error) {
        console.log(error);
    }
   

};

exports.editDetails = async(req,res)=>{

    const proId = req.params.userId;

    await detail.destroy({where:{
        id:proId
    }});


    res.send('Delte product')

};
exports.deleteDetails = async(req,res)=>{

    const proId = req.params.userId;
    console.log(proId);
    await detail.destroy({where:{
        id:proId
    }});


    res.send('Delte product')

};