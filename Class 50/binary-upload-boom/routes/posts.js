const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// shows one post, needs a login
router.get("/:id", ensureAuth, postsController.getPost);

// multer grabs the image from the form field named "file" first
router.post("/createPost", upload.single("file"), postsController.createPost);

// like a post (the form fakes PUT with ?_method=PUT)
router.put("/likePost/:id", postsController.likePost);

// delete a post (the form fakes DELETE with ?_method=DELETE)
router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;