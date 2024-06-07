
import mongoose from "mongoose"

const data = mongoose.Schema({ 


   createdby :{

      type: mongoose.Schema.Types.ObjectId,
      ref : "User",
      required: true,
      index: true
   

   },
   content :{
      type: String,
      required: true
   
   },

   uncompleteDate :{
      type: String,
      default: Date.now(),
   },

   completeDate :{
      type: String,
      
   },

   progressDate :{
      type: String,
   },

   currentstatus :{

      type: String,
      required: true,
      enum: ['uncomplete', 'complete', 'progress']
   }
},{timestamps: true})

export const Data = mongoose.model('Data', data)



