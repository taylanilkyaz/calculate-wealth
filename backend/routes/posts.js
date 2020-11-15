const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message:  err});
    }
});

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

router.get('/spesific', (req, res) => {
    res.send('We are at spesific posts');
});


module.exports = router;