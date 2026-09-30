const cloudinary = require("cloudinary").v2;

// loads the keys from the .env file
require("dotenv").config({ path: "./config/.env" });

// connects to my cloudinary account
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = cloudinary;