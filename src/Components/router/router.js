import express from 'express';
import bdata from '../data.js';
import wdata from '../data2.js';
import chocklatedata from '../data5.js';
import blackdata from '../data3.js';
import reddata from '../data4.js';
import User from '../user.js';

const router = express.Router();

// Get data from bdata collection
router.get("/getdata1", async (req, res) => {
  try {
    const data = await bdata.find();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json('fail');
  }
});

// Get data from wdata collection
router.get("/getdata2", async (req, res) => {
  try {
    const data = await wdata.find();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data2" });
  }
});

// Get data from blackdata collection
router.get("/getdata3", async (req, res) => {
  try {
    const data = await blackdata.find();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data3" });
  }
});

// Get data from reddata collection
router.get("/getdata4", async (req, res) => {
  try {
    const data = await reddata.find();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data3" });
  }
});

// Get data from chocklatedata collection
router.get("/getdata5", async (req, res) => {
  try {
    const data = await chocklatedata.find();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data3" });
  }
});

// Get product from different collections by ID
router.post("/getproduct", async (req, res) => {
  try {
    const id = req.body;

    let product = await bdata.findOne(id);
    if (product) {
      return res.send(product); // Ensure this stops execution here
    }

    let product2 = await blackdata.findOne(id);
    if (product2) {
      return res.send(product2); // Ensure this stops execution here
    }

    let product3 = await wdata.findOne(id);
    if (product3) {
      return res.send(product3); // Ensure this stops execution here
    }

    let product4 = await reddata.findOne(id);
    if (product4) {
      return res.send(product4); // Ensure this stops execution here
    }

    let product5 = await chocklatedata.findOne(id);
    if (product5) {
      return res.send(product5); // Ensure this stops execution here
    }

    // If no product is found
    res.status(404).json({ error: "Product not found" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching product" });
  }
});

// Get navbar data
router.get("/getnavbar", async (req, res) => {
  const user = req.user;
  if (user) {
    return res.send("success"); // If user exists, return immediately
  }

  res.send('fail'); // If user doesn't exist, return 'fail'
});

// Export the router
export default router;
