 //Create web server
 
 const router = express.Router();
 const commentController = require('../controllers/commentController');

 //Handle Request
 router.get('/', commentController.getComments);
 router.post('/', commentController.createComment);
 router.delete('/:id', commentController.deleteComment);

 module.exports = router;
 //Create controller, import Comment model and handle request example :const Comment = require('../models/Comment');

 exports.getComments = async (req, res) => {
     try {
         const comments = await Comment.find();
         res.send(comments);
     } catch (error) {
         res.status(500).send(error);
     }
 };

 exports.createComment = async (req, res) => {
     try {
         const comment = new Comment(req.body);
         await comment.save();
         res.send(comment);
     } catch (error) {
         res.status(500).send(error);
     }
 };

 exports.deleteComment = async (req, res) => {
     try {
         await Comment.findByIdAndDelete(req.params.id);
         res.send('Comment deleted successfully');
     } catch (error) {
         res.status(500).send(error);
     }
 };
 // Create model example :const mongoose = require('mongoose');

 const commentSchema = new mongoose.Schema({
     title: {
         type: String,
         required: true
     },
     content: {
         type: String,
         required: true
     }
 });

 const Comment = mongoose.model('Comment', commentSchema);

 module.exports = Comment;
 //Create database connection example :const mongoose = require('mongoose');

 const connectDB = async () => {
     try {
         const conn = await mongoose.connect('mongodb://localhost:27017/myDB', {
             useNewUrlParser: true,
             useUnifiedTopology: true
         });
         console.log(`MongoDB connected: ${conn.connection.host}`);
     } catch (error) {
         console.error(`Error: ${error.message}`);
         process.exit(1);
     }
 };

 module.exports = connectDB;
 //Create server example :const express = require('express');
 const connectDB = require('./config/db');
 const comments = require('./routes/comments');

 connectDB();

 const app = express();

 app.use(express.json());
 app.use('/comments', comments);

 const PORT = 5000;

 app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
 
