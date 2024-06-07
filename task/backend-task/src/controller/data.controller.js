
import { Data } from "../models/data.models.js";

const adddata = async (req, res) => {

   try {

      const { content,  currentstatus } = req.body;
      const id = req.params.id;

      console.log(id)

      if (!content || !currentstatus) {
         return res.status(400).json({ message: "content is required" })
      }

      const create = await Data.create({ content, createdby: id, currentstatus })

      if (!create) {
         return res.status(400).json({ message: "Data not created" })
      }

      res.status(201).json({ create })

   }

   catch (error) {
      res.status(500).json({ message: error.message })

   }

}

const deletedata = async (req, res) => {

   try {
      const id = req.params.id;
      const delt = await Data.findByIdAndDelete(id)

      if (!delt) {
         return res.status(404).json({ message: "Data not found" })
      }

      res.status(200).json({ message: "Data deleted successfully" })
   } catch (error) {
      res.status(500).json({ message: error.message })
   }

}


const getdata = async (req, res) => {

   try {
      const id = req.params.id;
      const get = await Data.find({ createdby: id })

      if (!get) {
         return res.status(404).json({ message: "Data not found" })
      }



      res.status(200).json({ get })
   } catch (err) {
      res.status(500).json({ message: err.message })
   }

}


const update = async (req, res) => {

   try {

   } catch (error) {
      res.status(500).json({ message: error.message })
   }
}
export { adddata, deletedata, getdata, update }