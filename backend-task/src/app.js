import express from 'express';
import cors from "cors";
const app = express();



// middleware for cors
app.use(cors({
   origin: "http://localhost:5173",
   credentials: true

}))

// middleware for json data
app.use(express.json({
   limit: "5mb"
}))



// middleware for url data
app.use(express.urlencoded({ extended: true  }))

import user_router from './routes/user.routes.js';
import data_router from './routes/data.routes.js';


app.use('/api/v1/user', user_router);
app.use('/api/v1/data', data_router);


app.get('/', (req, res) => { 
   res.send('Hello task app World')
})

export default app;