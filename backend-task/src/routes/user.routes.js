import { Router } from "express";

import { register , login , deleteuser , getuser  } from "../controller/user.controller.js";
const user_router = Router();

user_router.post("/register",register)
user_router.post("/login",login)
user_router.get("/userinfo/:id",getuser)
user_router.delete("/delete/:id",deleteuser)



export default user_router;