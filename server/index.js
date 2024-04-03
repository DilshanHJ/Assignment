const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { saveUsers, getUsers } = require("./controllers/controllers");
require("dotenv").config();

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
});

// Enable CORS
app.use(cors());

// Parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Requests Handling
app.route("/api/users").post(saveUsers).get(getUsers);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
