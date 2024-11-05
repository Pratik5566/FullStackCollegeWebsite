// models/BlogComment.js
const mongoose = require('mongoose');

const BlogCommentSchema = new mongoose.Schema({
    name: String,
    email: String,
    comment: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('BlogComment', BlogCommentSchema);
