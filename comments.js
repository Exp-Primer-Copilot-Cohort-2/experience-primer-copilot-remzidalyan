// Create web server in skill.js file information

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle Request
router.get('/', commentController.getComments);
router.post('/', commentController.createComment);
router.delete('/:id', commentController.deleteComment);
