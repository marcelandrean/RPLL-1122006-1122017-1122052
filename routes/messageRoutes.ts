import express from 'express';
import db from '../config/db';

const router = express.Router();

// Send Message
router.post('/', (req, res) => {
  const { senderID, receiverID, content } = req.body;
  const query = 'INSERT INTO Messages (SenderID, ReceiverID, Content, Timestamp) VALUES (?, ?, ?, NOW())';
  db.query(query, [senderID, receiverID, content], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Message sent', messageId: result.insertId });
  });
});

// Get Message by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM Messages WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(result[0]);
  });
});

// Delete Message by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM Messages WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Message deleted' });
  });
});

// Get Messages between Users
router.get('/', (req, res) => {
  const { user1, user2 } = req.query;
  const query = 'SELECT * FROM Messages WHERE (SenderID = ? AND ReceiverID = ?) OR (SenderID = ? AND ReceiverID = ?)';
  db.query(query, [user1, user2, user2, user1], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

// Get Messages by User ID
router.get('/user/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT * FROM Messages WHERE SenderID = ? OR ReceiverID = ?';
  db.query(query, [userId, userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

export default router;
 