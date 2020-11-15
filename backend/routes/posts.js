const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//Get Users
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

//Submit User
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPosts = await post.save();
        res.json(savedPosts);
    } catch (err) {
        res.json({ message: err });
    }
})

//Get Spesific User
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//Delete User
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json({ message: 'Delete process is successfull' })
    } catch (err) {
        res.json({ message: err });
    }
});

//Update User
router.put('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set: { title: req.body.title, description: req.body.description }
            });
        res.json(updatedPost.body)
    } catch (err) {
        res.json({ message: err });
    }

});

module.exports = router;