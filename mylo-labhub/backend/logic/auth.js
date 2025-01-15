const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findByEmail, createUser } = require('../models/userModel');

const signup = (name, email, password, callback) => {
  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return callback(err);

    // Save user to the database
    createUser(name, email, hashedPassword, callback);
  });
};

const login = (email, password, callback) => {
  findByEmail(email, (err, results) => {
    if (err) return callback(err);

    if (results.length === 0) {
      return callback(new Error('User not found'));
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return callback(err);

      if (!isMatch) {
        return callback(new Error('Invalid password'));
      }

      // Generate JWT token
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      callback(null, { token, user });
    });
  });
};

module.exports = { signup, login };
