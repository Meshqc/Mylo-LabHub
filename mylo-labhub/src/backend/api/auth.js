import express from 'express';
const { signup, login } = require('../logic/auth');
const { signupSchema, loginSchema } = require('../schemas/authSchema');
const validate = require('../middleware/validate');

const router = express.Router();

// Signup Route
router.post('/signup', validate(signupSchema), (req, res) => {
  const { name, email, password } = req.body;

  signup(name, email, password, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});

// Login Route
router.post('/login', validate(loginSchema), (req, res) => {
  const { email, password } = req.body;

  login(email, password, (err, result) => {
    if (err) {
      return res.status(401).json({ error: err.message });
    }
    res.status(200).json(result);
  });
});

module.exports = router;
