const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connect_mongodb = require('./config/db');
const routes = require('./routes/farmer.routes'); 

dotenv.config();

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

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 8080;

connect_mongodb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
