import express from 'express';
import db from '../config/db';

const router = express.Router();

// Create User
router.post('/', (req, res) => {
  const { username, displayName, email, password, profilePictureURL, bannerPhotoURL, matchPhotoURL, gender, bio, dateOfBirth, location, hobby, height, weight, work } = req.body;
  const query = 'INSERT INTO Users (Username, DisplayName, Email, Password, ProfilePictureURL, BannerPhotoURL, MatchPhotoURL, Gender, Bio, DateOfBirth, Location, Hobby, Height, Weight, Work) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [username, displayName, email, password, profilePictureURL, bannerPhotoURL, matchPhotoURL, gender, bio, dateOfBirth, location, hobby, height, weight, work], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'User created', userId: result.insertId });
  });
});

// Get User by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM Users WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(result[0]);
  });
});

// Update User by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { username, displayName, email, password, profilePictureURL, bannerPhotoURL, matchPhotoURL, gender, bio, dateOfBirth, location, hobby, height, weight, work } = req.body;
  const query = 'UPDATE Users SET Username = ?, DisplayName = ?, Email = ?, Password = ?, ProfilePictureURL = ?, BannerPhotoURL = ?, MatchPhotoURL = ?, Gender = ?, Bio = ?, DateOfBirth = ?, Location = ?, Hobby = ?, Height = ?, Weight = ?, Work = ? WHERE ID = ?';
  db.query(query, [username, displayName, email, password, profilePictureURL, bannerPhotoURL, matchPhotoURL, gender, bio, dateOfBirth, location, hobby, height, weight, work, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'User updated' });
  });
});

// Delete User by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM Users WHERE ID = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'User deleted' });
  });
});

// Get All Users
router.get('/', (req, res) => {
  const query = 'SELECT * FROM Users';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

export default router;
