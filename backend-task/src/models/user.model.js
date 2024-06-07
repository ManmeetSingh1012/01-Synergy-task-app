import mongoose from "mongoose";


const userschema =  mongoose.Schema({

      name: {

         type: String,
         required: true,
         index: true

      },


      email: {

         type: String,
         required: true,
         unique: true

      },
}, { timestamps: true })


export const User = mongoose.model('User', userschema);