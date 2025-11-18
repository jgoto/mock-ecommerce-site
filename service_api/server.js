const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config('.env');

PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/ping', (req, res)=>{
    return res.json({message: "Pong"});
})

app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)});