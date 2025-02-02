import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import cors from 'cors';
import dotenv from 'dotenv';
import review from './review2.js';
import joy from './joy.js';
import userdata from './product.js';
import User from './user.js';
import User2 from './user2.js';
import homedata from './home2.js';
import contact from './contact.js';
import router2 from './router/adminrouter.js';
import router from './router/router.js';

// Configure environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const corsOptions = {
//   origin: 'https://firstbitecakeshop.vercel.app', // Replace with your frontend's origin
//   credentials: true, // Allow cookies and other credentials
// };
const corsOptions = {
  origin: 'https://firstbitecakeshop.vercel.app', // Replace with your frontend's origin
  credentials: true, // Allow cookies and other credentials
};

app.use(cors(corsOptions));
app.use(cookieParser());

// JWT Middleware for regular user
const jwtMiddleware = (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send("fail");
  }

  try {
    const decoded = jwt.verify(token, process.env.VITE_KEY);
    req.user = decoded; // Attach the decoded token to the request object
    // Log user info for debugging
    next(); // Proceed with the next middleware
  } catch (error) {

     res.send("fail");
  }
};

// JWT Middleware for admin
const jwtMiddleware2 = (req, res, next) => {
  const token = req.cookies?.token2 || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, process.env.VITE_KEY);
    req.user = decoded; // Attach the decoded token to the request object
    next(); // Proceed with the next middleware
  } catch (error) {

   res.status(401).send("fail");
  }
};

// Sign up route
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Username, email, and password are required" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return res.send("success");
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign({ username }, process.env.VITE_KEY, { expiresIn: "1h" });

    res.cookie("token", token, { httpOnly: true,secure:true,sameSite:"None" });
    return res.send("success");
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Admin login route
app.post("/adminlogin", async (req, res) => {
  const { admin, password } = req.body;

  try {
    const user = await User2.findOne({ admin });
   
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    if (password !== user.password) {
     
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const token2 = jwt.sign({ admin }, process.env.VITE_KEY, { expiresIn: "1h" });
     res.cookie("token2", token2, { httpOnly: true,secure:true,sameSite:"None" });
     return res.send("success");
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Get home data
app.get("/gethomedata", async (req, res) => {
  try {
    let data = await homedata.find();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching home data" });
  }
});

// Place an order (with JWT Middleware)
app.post("/placeorder", jwtMiddleware, async (req, res) => {
  const user = req.user; // Retrieved from jwtMiddleware
  const { price, quantity, username, mobile, address, _id } = req.body;

  try {
    // Find the user by username (from JWT)
    const existingUser = await User.findOne({ username: user.username });
    if (!existingUser) {
      return res.status(404).send("User not found");
    }

    // Create a new product (order)
    const newProduct = new userdata({ price, quantity, username, mobile, address });
    const savedProduct = await newProduct.save();

    // Add the saved product reference to the user's items array
    existingUser.userinfo.push(savedProduct._id); // Add product ID
    await existingUser.save(); // Ensure this is saved after modifying the array

    res.status(200).send("Order placed successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while placing the order");
  }
});

// Admin route for checking admin status (using JWT Middleware for admin)
app.get("/admin/getadmin", jwtMiddleware2, async (req, res) => {
  res.send("success");
});

// Logout route (clearing JWT cookie)
app.get("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0), // Expire immediately
    secure: true, // Required for HTTPS
    sameSite: "None" // Required if frontend & backend are on different domains
  });
  return res.send("success");
});

// Get joy data
app.get("/joy", async (req, res) => {
  try {
    const joyData = await joy.find();
    res.send(joyData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching joy data" });
  }
});

// Get review data
app.get("/review", async (req, res) => {
  try {
    const reviewData = await review.find();
    res.send(reviewData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching review data" });
  }
});

// Add review route
app.post("/review", async (req, res) => {
  const { rating, comment } = req.body;

  try {
    let newReview = new review({ rating, comment });
    await newReview.save();
    res.send('success');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding review');
  }
});

// Contact form submission route
app.post("/contacts", async (req, res) => {
  const { username, email, mobile, message } = req.body;

  try {
    let newContact = new contact({ username, email, mobile, message });
    await newContact.save();
    res.send("success");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error submitting contact form");
  }
});

// Use router for specific routes
app.use("/admin", router2);
app.use('/', jwtMiddleware, router);
// mongodb://localhost:27017
// Connect to MongoDB
// mongoose.connect(process.env.VITE_URLS)
mongoose.connect(process.env.VITE_URLS)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error", err));

// Start the Express server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
