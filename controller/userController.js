// const { json } = require('express')
const  Person  =  require('../model/userModel.js')

exports.home = (req,res)=>{
    res.send('Hello World')
    console.log('For first exports testing');
}

exports.userRegister =  async (req,res)=>{
    const {name,email,password} = req.body
    try {

        const detailsExit = await Person.findOne({email})
        if(detailsExit){
            throw new Error ('Already Used details')
        }

        const person = await Person.create({name,email,password})
        res.status(201).json({
            sucess:true,
            message:'User Register Successfully',
            person,
        })

    } catch (error) {
        res.status(400).json({
            sucess:false,
            message:'User create Unsuccessful !! ERROR'
        })
    }
}

exports.userLogin = async (req,res) =>{
    const {email,password} = req.body;
try {
    const userdata = await Person.findOne({email})
    //checking password is correct or not
    if(userdata){
        if(userdata.password == password){
            res.status(202).json({
                sucess:true,
                message:'Login successfully'
            })
        } else{
            res.status(404).json({
                message:'Invalid Password !'
            })
        }
    } else {
        res.status(405).json({
            message:'Account not created'
        })
    }
   
    
} catch (error) {
    res.status(406).json({
        message:'Error: wrong password or email '
    })
}

}

exports.userDelete = async (req,res)=>{
    try {
        const userEmail = req.body.email
        const user = await Person.findByIdAndDelete(userEmail)
        res.status(200).json({
            sucess:true,
            message :'Sucessfully deleted user',
            
    })
    } catch (error) {
        console.log("error",error);
        res.status(400).json({
            sucess:false,
            message :'Error: Unable to delete',
         
    })
    
}
}