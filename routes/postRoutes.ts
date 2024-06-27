import express from 'express';
import db from '../config/db';

const router = express.Router();

// Create Post
router.post('/', (req, res) => {
  const { userID, description, mediaType, mediaURL } = req.body;
  const query = 'INSERT INTO Posts (UserID, Description, MediaType, MediaURL, CreationDate) VALUES (?, ?, ?, ?, NOW())';
  db.query(query, [userID, description, mediaType, mediaURL], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Post created', postId: result.insertId });
  });
});

// Get Post by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM Posts WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(result[0]);
  });
});

// Update Post by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { description, mediaType, mediaURL } = req.body;
  const query = 'UPDATE Posts SET Description = ?, MediaType = ?, MediaURL = ? WHERE ID = ?';
  db.query(query, [description, mediaType, mediaURL, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Post updated' });
  });
});

// Delete Post by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM Posts WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Post deleted' });
  });
});

// Get All Posts
router.get('/', (req, res) => {
  const query = 'SELECT * FROM Posts';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

export default router;
 