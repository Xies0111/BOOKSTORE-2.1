const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("MongoDB connection failed:", err));

// Sample route to check if everything works
app.get("/", (req, res) => {
  res.send("Welcome to the Bookstore API");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

mongoose.connect(process.env.MONGO_URI)
   .then(() => console.log("MongoDB connected..."))
   .catch(err => console.log("MongoDB connection failed:", err));
