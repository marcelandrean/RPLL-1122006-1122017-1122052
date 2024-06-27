import express from 'express';
import db from '../config/db';

const router = express.Router();

// Create Match
router.post('/', (req, res) => {
  const { swiperID, swipedID, status } = req.body;
  const query = 'INSERT INTO Matches (SwiperID, SwipedID, MatchDate, Status) VALUES (?, ?, NOW(), ?)';
  db.query(query, [swiperID, swipedID, status], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Match created', matchId: result.insertId });
  });
});

// Get Match by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM Matches WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(result[0]);
  });
});

// Update Match by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const query = 'UPDATE Matches SET Status = ? WHERE ID = ?';
  db.query(query, [status, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Match updated' });
  });
});

// Delete Match by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM Matches WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Match deleted' });
  });
});

// Get Matches by User ID
router.get('/user/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT * FROM Matches WHERE SwiperID = ? OR SwipedID = ?';
  db.query(query, [userId, userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

export default router;
 