const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectDatabase = require('./config/db');
const courseRoutes = require('./routes/courseRoutes');
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// connect database
connectDatabase();

// connect routers
app.use('/api/courses', courseRoutes);


// default routes
app.get('/', (req,res) => {
	res.send('Welcome to learnCode!!!');
});
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});


//-> create server
//-> connect database
//-> create schema
//-> find data from controller using schema model
//-> define routes for controllers
//-> connect routers to server app
    