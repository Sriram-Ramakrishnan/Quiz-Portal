import cors from 'cors'
import logger from 'morgan'
import express from 'express'
import bodyParser from 'body-parser'

const app = express();
app.use(cors({origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res) => res.send('Welcome to Oauth Express'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));