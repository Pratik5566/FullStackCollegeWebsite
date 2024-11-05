// routes/formRoutes.js
const express = require('express');
const Admission = require('../models/Admission');
const Contact = require('../models/Contact');
const BlogComment = require('../models/BlogComment');

const router = express.Router();

// Admission Form Submission
router.post('/admission', async (req, res) => {
    try {
        const admission = new Admission(req.body);
        await admission.save();
        res.status(201).json({ message: 'Admission form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit admission form' });
    }
});

// Contact Form Submission
router.post('/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit contact form' });
    }
});

// Blog Comment Submission
router.post('/blog-comment', async (req, res) => {
    try {
        const blogComment = new BlogComment(req.body);
        await blogComment.save();
        res.status(201).json({ message: 'Comment submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit comment' });
    }
});

module.exports = router;
