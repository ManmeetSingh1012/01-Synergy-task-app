import dotenv from 'dotenv';
dotenv.config({"path":"./.env"})
import app from "./app.js";
import { connect } from "./database/database.js";


connect().then(()=>{
   app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running on port ${process.env.PORT || 4000}`);
    })
}).catch((err)=>{ 

   console.log(err.message)
})


