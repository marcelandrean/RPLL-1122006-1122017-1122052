import express from 'express';
import db from '../config/db';

const router = express.Router();

// Create Notification
router.post('/', (req, res) => {
  const { type, content, userID } = req.body;
  const query = 'INSERT INTO Notifications (Type, Content, Timestamp, UserID) VALUES (?, ?, NOW(), ?)';
  db.query(query, [type, content, userID], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Notification created', notificationId: result.insertId });
  });
});

// Get Notification by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM Notifications WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(result[0]);
  });
});

// Delete Notification by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM Notifications WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Notification deleted' });
  });
});

// Get Notifications by User ID
router.get('/user/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT * FROM Notifications WHERE UserID = ?';
  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

export default router;
 