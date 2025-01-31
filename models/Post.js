const mongoose = require('mongoose');

// Define the schema for a post
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  comments: [{ username: String, text: String }],
  subscribers: [String],
});

// Create a text index to allow full-text search on the title and content fields
postSchema.index({ title: 'text', content: 'text' });

// Create a model based on the schema
const Post = mongoose.model('Post', postSchema);

module.exports = Post;  // Export the Post model to be used in other files
