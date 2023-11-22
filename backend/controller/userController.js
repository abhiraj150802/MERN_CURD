
const User=require('../schema/userSchema')



module.exports.addUser=async(req,resp)=>{
    const user=req.body;

    const newuser=new User(user)

    try{
       await newuser.save()
       resp.status(201).json(newuser)
    }
    catch(err){
      resp.status(409).json({message:err.message})
    }
}

module.exports.getUser=async(req,resp)=>{
  try {
     const users =await  User.find({})
     resp.status(200).json(users)
  } catch (error) { 
    resp.status(404).json({message:error.message});
  }
}

module.exports.getEditUser=async(req,resp)=>{
  try {
     const user =await  User.find({_id:req.params.id})
     resp.status(200).json(user)
  } catch (error) { 
    resp.status(404).json({message:error.message});
  }
}

module.exports.saveEditedUser=async(req,resp)=>{
    const user=req.body;
    const id=req.params.id
    //validate kar rahe h schema se
    const editedUser=new User(user)

    try{
       await User.updateOne({_id:id},editedUser)
       resp.status(201).json(editedUser)
    }
    catch(err){
      resp.status(409).json({message:err.message})
    }
}

module.exports.deleteUser=async(req,resp)=>{
  
   
   try{
    const result= await User.deleteOne({_id:req.params.id})
       resp.status(201).json(result)
    }
    catch(err){
      resp.status(409).json({message:err.message})
    }
}