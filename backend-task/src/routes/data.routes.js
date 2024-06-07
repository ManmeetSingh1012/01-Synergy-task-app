import { Router } from "express";
import { adddata , deletedata , getdata , update } from "../controller/data.controller.js";
const data_router = Router();

data_router.post("/create/:id",adddata)
data_router.get("/get/:id",getdata)
data_router.put("/update/:id",update)
data_router.delete("/delete/:id",deletedata)

export default data_router;