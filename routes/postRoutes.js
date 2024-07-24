const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
  Post.find()
    .populate("user")
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json(err));
});

router.post("/", (req, res) => {
  const newPost = new Post({
    user: req.body.user,
    content: req.body.content,
  });

  newPost
    .save()
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
