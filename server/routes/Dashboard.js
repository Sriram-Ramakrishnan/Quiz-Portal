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
router.get('/questions/:id', async (req, res) => {
    try {
      const set_no = req.params.id;
      const { rows } = await pool.query('SELECT q_id,question,subject,option1,option2,option3,option4 FROM questionSet_'+set_no);
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error fetching questions:', error);
      res.status(500).send('Error fetching questions from database');
    }
  });

// POST request to post questions to the question_Set table
// Comment it out during production
router.post('/questions/:id', async (req, res) => {
  try {
    const set_no = req.params.id;
    const { question,subject,option1,option2,option3,option4,correct_answer } = req.body;
    const newQuestion  = await pool.query("INSERT INTO questionSet_"+set_no+ 
                  " (question,subject,option1,option2,option3,option4,correct_answer) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",[question,subject,option1,option2,option3,option4,correct_answer]);
    res.json({newQuestion});
    
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).send('Error fetching questions from database');
  }
});
  
  // PUT request to insert answers into the answers table
  router.put('/answers', authorization, async (req, res) => {
    const { email, answers } = req.body;
    try {
      const user  = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

      if(user.rows.length === 0){
          return res.status(401).send("Email or password is incorrect");
      }
      const answerQuery = await pool.query("UPDATE users SET answers = $1 WHERE user_email = $2 RETURNING *",[answers,email]);
    } catch (error) {
      console.error('Error inserting answers:', error);
      res.status(500).send('Error inserting answers into database');
    }
  });

module.exports = router;