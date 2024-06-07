import mongoose from 'mongoose';


export const connect = async () => {  

   try {
      const connectionInstance = await mongoose.connect( process.env.Mongodb_url
        );
        console.log('Connected to DB', connectionInstance.connection.host);
   } catch (error) {
      console.log('Error connecting to database', error);
   }
}