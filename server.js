const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/donate-food', (req, res) => {
  const { foodDetails } = req.body;
  console.log('Food Donation:', foodDetails);
  res.json({ message: 'Thank you for donating food!' });
});

app.post('/donate-money', (req, res) => {
  const { amount } = req.body;
  console.log('Money Donation:', amount);
  res.json({ message: 'Thank you for donating money!' });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact Form:', name, email, message);
  res.json({ message: 'Thank you for reaching out to us!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
