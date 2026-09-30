const mongoose = require("mongoose");

// what a post looks like in the database
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // image url from cloudinary
  image: {
    type: String,
    require: true,
  },
  // cloudinary id, needed to delete the image later
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  // links the post to the user who made it
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);