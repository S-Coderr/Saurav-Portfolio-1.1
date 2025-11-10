const express = require('express');
const cors = require('cors');
const Contact = require('./Mongo');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { username, email, message } = req.body;
    
    if (!username || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = await Contact.create({
      username,
      email,
      message
    });

    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully',
      data: newContact 
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});