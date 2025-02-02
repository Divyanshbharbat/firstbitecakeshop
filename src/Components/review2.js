import mongoose from 'mongoose';

// Define the review schema
let reviewschema = mongoose.Schema({
  comment: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createAt: {
    type: Date,
   
   // Date.now should be passed as a function, not invoked
  },
});

// Create the review model
let review = mongoose.model('review', reviewschema);
export default review
// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017")  // Specify a database name, e.g., "reviewsDB"
//   .then(() => console.log("Connected to MongoDB for reviews"))
//   .catch((err) => console.error("Failed to connect to MongoDB", err));

// // Function to insert review documents
// let r = async () => {
//   try {
//     let result = await review.insertMany([
//       {
//         comment: "hello",
//         rating: 5,
//       },
//     ]);
//     console.log("Inserted Reviews:", result);
//   } catch (err) {
//     console.error("Error inserting reviews:", err);
//   }
// };

// // Call the function
// r();
