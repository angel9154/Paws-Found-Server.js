const express = require('express');
const router = express.Router();

// POST route to handle contact form submissions
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact Form Submission:', { name, email, message });
    res.status(200).json({ message: 'Contact form submitted successfully!' });
});

module.exports = router;
