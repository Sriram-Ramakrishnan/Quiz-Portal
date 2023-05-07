const express = require('express');
const app = express();
const cors = require('cors');

// Middleware 

app.use(express.json()); // Body of the request
app.use(cors());

// Routes:

app.use('/auth', require('./routes/jwtAuth'));
app.use('/dashboard', require("./routes/Dashboard"));

// Listen Function:
app.listen(5000, ()=>{
    console.log("Server @ port 5000");
})