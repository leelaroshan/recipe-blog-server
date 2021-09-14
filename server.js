
require('dotenv').config();
require('colors');
const express = require('express');
const cors = require('cors');


const recipes = require('./api/recipes');

const connectDB = require('./dbinit');
const server = express();
const PORT = process.env.PORT || 5000;


connectDB();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => res.send('Welcome to Recipe blog with MERN stack!'));
server.use('/recipes', recipes);



server.listen(PORT, () => console.log(`Server started on port ${PORT}`));




