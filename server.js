const express  = require('express');
const app = express();
const port  = 3000;
const questionRoutes = require('./src/questions/routes');

app.get("/",(req,res) => {
    res.send("Hello World!");
})

app.use('/api/questions', questionRoutes);

// Listen to this port
app.listen(port,() => console.log(`App listening on port ${port}`));
