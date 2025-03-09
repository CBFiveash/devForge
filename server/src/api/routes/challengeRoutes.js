// api/routes/challengeRoutes.js
const express = require('express');
const router = express.Router();

// Test route to check server setup
router.get('/test', (req, res) => {
  res.json({ message: 'challenge API is working!' });
});

module.exports = router;
