const router  = require('express').Router();
const pool = require('../db');
const authorization = require('../middleware/authorization');

router.get("/", authorization, async (req,res) => {
    try {
        const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1",[req.user]);
        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

// GET request to fetch questions from the question_Set table
router.get('/questions', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM questionSet_1');
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error fetching questions:', error);
      res.status(500).send('Error fetching questions from database');
    }
  });
  
  // POST request to insert answers into the answers table
  router.post('/answers', async (req, res) => {
    const { answers } = req.body;
    try {
      const query = {
        text: 'INSERT INTO answers (answer) VALUES ($1)',
        values: [JSON.stringify(answers)],
      };
      await pool.query(query);
      res.status(200).send('Answers submitted successfully');
    } catch (error) {
      console.error('Error inserting answers:', error);
      res.status(500).send('Error inserting answers into database');
    }
  });

module.exports = router;