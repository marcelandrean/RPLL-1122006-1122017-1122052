import express from 'express';
import db from '../config/db';

const router = express.Router();

// Create Comment
router.post('/', (req, res) => {
  const { userID, postID, content } = req.body;
  const query = 'INSERT INTO Comments (UserID, PostID, Content, Timestamp) VALUES (?, ?, ?, NOW())';
  db.query(query, [userID, postID, content], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Comment created', commentId: result.insertId });
  });
});

// Get Comment by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM Comments WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(result[0]);
  });
});

// Update Comment by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const query = 'UPDATE Comments SET Content = ? WHERE ID = ?';
  db.query(query, [content, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Comment updated' });
  });
});

// Delete Comment by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM Comments WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Comment deleted' });
  });
});

// Get Comments by Post ID
router.get('/post/:postId', (req, res) => {
  const { postId } = req.params;
  const query = 'SELECT * FROM Comments WHERE PostID = ?';
  db.query(query, [postId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

export default router;
 