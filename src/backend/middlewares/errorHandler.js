const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  if (err.code === 'ER_DUP_ENTRY') {
    return res.status(400).json({ error: 'Email already exists' });
  }

  res.status(500).json({ error: 'Something went wrong!' });
};

export default errorHandler; 