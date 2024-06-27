import express from 'express';
import db from '../config/db';

const router = express.Router();

// Get All Logs
router.get('/', (req, res) => {
  const query = 'SELECT * FROM Logs';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

// Get Log by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM Logs WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(result[0]);
  });
});

// Create Log
router.post('/', (req, res) => {
  const { type, description } = req.body;
  const query = 'INSERT INTO Logs (Type, Description, Timestamp) VALUES (?, ?, NOW())';
  db.query(query, [type, description], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Log created', logId: result.insertId });
  });
});

// Delete Log by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM Logs WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Log deleted' });
  });
});

export default router;
 