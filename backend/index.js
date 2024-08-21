const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connect_mongodb = require('./config/db');
const cus_routes=require('./routes/customer.routes') 
const routes = require('./routes/farmer.routes'); 
const routes_product = require('./routes/products.routes');

dotenv.config();

const app = express();
app.use(cors());
app.options('*',cors());
var allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
}
app.use(allowCrossDomain);


app.use(express.json()); 

// Setup routes
app.use('/api/customer',cus_routes)
app.use('/api/product', routes_product);
app.use('/api/farmer', routes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 8080;

connect_mongodb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
