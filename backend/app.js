const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

// Middleware for handling CORS (Cross-Origin Resource Sharing)
app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
})); 

// Middleware for parsing JSON requests
app.use(express.json()); 

// Setup routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
