const { Router } = require('express');
const pool = require('../../db');
// creating router obj, adding routes to it, export the router and will be imported in server.js
const router = Router();

// Get the Questions from the database
router.get('/cse', (req,res) => {
    pool.query("SELECT * from cse", (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    }
)});

module.exports = router;