const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get('/', (req,res) => {
	res.send('Welcome to learnCode!!!');
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
