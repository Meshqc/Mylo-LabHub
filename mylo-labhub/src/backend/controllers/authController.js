import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../models/userModel.js';

export const signup = (req, res) => {
  const { name, email, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: err.message });

    // Save the user in the database
    createUser(name, email, hashedPassword, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ error: 'Email already exists' });
        }
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;

  // Find the user in the database
  findUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = results[0];

    // Compare passwords
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: err.message });

      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      // Generate JWT
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      res.status(200).json({ message: 'Login successful', token });
    });
  });
};
