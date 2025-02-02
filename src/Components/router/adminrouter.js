import express from 'express';
const router = express.Router();
import bdata from '../data.js';
import wdata from '../data2.js';
import chocklatedata from '../data5.js';
import blackdata from '../data3.js';
import reddata from '../data4.js';
import User from '../user.js';
import User2 from '../user2.js';

// Route to add data to the appropriate model based on the "model" provided in the request body
router.post("/data", async (req, res) => {
  console.log("Data is:", req.body);
 let { model, name, image, price } = req.body;


 
  try{
    if (model == 'bdata')
    {
      let newdata= new bdata({name,image,price})
      await newdata.save()
    }
    if (model == 'wdata')
    {
      let newdata=new wdata({name,image,price})
      await newdata.save()
    }
    if (model == 'reddata')
    {
      let newdata=new reddata({name,image,price})
      await newdata.save()
    }
    if (model == 'blackdata')
    {
      let newdata=new blackdata({name,image,price})
      await newdata.save()
    }
    if (model == 'chocklatedata')
    {
      let newdata=new chocklatedata({name,image,price})
      await newdata.save()
    }
  }
   catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add data" });
  }
});

// Route to delete data from the appropriate model
router.post("/deletedata", async (req, res) => {
  console.log("Delete data:", req.body);
  let { model2, username } = req.body;

 try{
  if (model2 == 'bdata')
  {
    let t=await bdata.findOneAndDelete({ name:username });
  
  }
  if (model2 == 'wdata')
  {
    await wdata.findOneAndDelete({ name:username });
  }
  if (model2 == 'reddata')
  {
    await reddata.findOneAndDelete({ name:username});
  }
  if (model2 == 'blackdata')
  {
    await blackdata.findOneAndDelete({  name:username})
  if (model2 == 'chocklatedata')
  {
      await chocklatedata.findOneAndDelete({name:username})        
  }
 }}
  
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete data" });
  }
});

// Route to get all users
router.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching users" });
  }
});

// Route to log out (clear cookie)
router.get("/logout", async (req, res) => {
  res.cookie("token", "", { httpOnly: true });
  return res.status(200).send("success");
});

// Route to add admin data (create a new admin)
router.post("/admindata2", async (req, res) => {
  const { admin, password } = req.body;

  try {
    const newAdmin = new User2({ admin, password });
    const savedAdmin = await newAdmin.save();
    res.status(201).json({ message: "Admin data added successfully", data: savedAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add admin data" });
  }
});

export default router;
