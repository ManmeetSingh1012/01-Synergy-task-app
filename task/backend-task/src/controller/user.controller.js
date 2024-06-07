import { User } from "../models/user.model.js";


const register = async (req, res) => {  

   try{


      const {name, email} = req.body;

      if(!name || !email)
      {
         return res.status(400).json({message: "All fields are required"})
      
      }

      const check = await User.findOne({email})

      if(check)
      {
         return res.status(400).json({message: "User already exists"})
      }

      const user = await User.create({name, email})

      res.status(201).json({user})
   }catch(error)
   {
      res.status(500).json({message: error.message})
   }
}


const deleteuser = async (req, res) => { 

   try{

      const {id} = req.params.id;

      const user = await User.findByIdAndDelete(id)

      if(!user)
      {
         return res.status(404).json({message: "User not found"})
      }

      res.status(200).json({message: "User deleted successfully"})

   }catch(error)
   {
      res.status(500).json({message: error.message})
   }

}

const getuser = async (req,res )=>{
   try{


      const {id} = req.params.id;

      const user = await User.findById(id)

      if(!user)
      {
         return res.status(404).json({message: "User not found"})
      }

      res.status(200).json({user})
   }catch(error)
   {
      res.status(500).json({message: error.message})
   }
}

const login = async (req, res) => {  

   try{

      const {email} = req.body;

      if(!email)
      {
         return res.status(400).json({message: "email is required"})
      
      }

      const user = await User.findOne({email})

      if(!user)
      {
         return res.status(400).json({message: "User not found"})
      }

      res.status(200).json({user})

   }catch(error)
   {
      res.status(500).json({message: error.message})
   }
}

export { register, deleteuser, getuser, login }