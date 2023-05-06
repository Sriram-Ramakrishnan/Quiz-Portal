const { Router } = require('express');
const pool = require('../../db');
// creating router obj, adding routes to it, 
// export the router and will be imported in server.js
const router = Router();

const randomSet = function(){
    // Use random() to generate no from 0 to 1
    // floor() => for integer, 0 to 4
    // Add 1 so randomSet = 1 to 5
    return Math.floor(Math.random()*5 + 1);
}

// Get All Questions from a specific subject database
router.get('/cse', (req,res) => {
    pool.query("SELECT question from cse", (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    }
)});

/*
// Get Questions based on Set:
router.get('/id:set_id', (req,res) => {
    // Select queries from all tables with respect to set
    // Use WHERE clause to select 
    // Append them to a JSON file for each subjects
});

// Update a question in the specific database:
router.put('/cse', (req,res) => {
    // Send data in JSON format
    // Parse the data into INSERT INTO query
    // Commit the query
});

// Calculate marks/store the answers of the students in database
router.post('/answers/user:user_id', (req,res)=>{
    
})
**/

module.exports = router;