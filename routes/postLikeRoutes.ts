import express from 'express';
import db from '../config/db';

const router = express.Router();

// Like Post
router.post('/', (req, res) => {
  const { userID, postID } = req.body;
  const query = 'INSERT INTO PostLikes (UserID, PostID, Timestamp) VALUES (?, ?, NOW())';
  db.query(query, [userID, postID], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Post liked', likeId: result.insertId });
  });
});

// Unlike Post
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM PostLikes WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Post unliked' });
  });
});

// Get Post Likes by Post ID
router.get('/post/:postId', (req, res) => {
  const { postId } = req.params;
  const query = 'SELECT * FROM PostLikes WHERE PostID = ?';
  db.query(query, [postId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

// Get Post Likes by User ID
router.get('/user/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT * FROM PostLikes WHERE UserID = ?';
  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

export default router;
