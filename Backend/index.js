const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// const PORT = process.env.PORT;
const pool = require('./db')

// Cors middlewares

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true 
}));

// Middleware for Auth ;

app.post('/login',async(req,res)=>{
  const {username,password} = req.body;
  console.log(username)
  console.log(password)
  try {
    const query = {
      text: 'SELECT * FROM auth WHERE userid = $1 AND password = $2',
      values: [username, password],
    };
    const result = await pool.query(query);
    if (result.rows.length > 0) {
     
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Access denied. Invalid credentials.' });
    }

  } catch (error) {
    console.error('Error executing login query:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

})

app.get('/login',async(req,res)=>{
  try {
   const id = req.query.username
   const password=req.query.password
   console.log(id)
   console.log(password)
   const getfac = await pool.query(`select isfaluclty from auth where userid= $1  AND password = $2 `,[id, password])
   console.log(getfac.rows)
   res.json(getfac.rows)
  } catch (error) {
   res.json(error)
  }
})

// middlewares for view attendance that is to fetch links 

app.post('/viewatt', async(req, res) => {
  const { year, department, division, subject } = req.body;
  console.log(year);
  console.log(department);
  console.log(division);
  console.log(subject);
  const getlink = await pool.query(`select link from links where year= $1  AND department=$2 AND division=$3 AND subject = $4 `,[year, department,division,subject])
  console.log(getlink.rows)
  res.json(getlink.rows[0].link)
  // res.status(200).send("Data received successfully");
});

//defaulters link middlewares
app.post('/defaulter', async (req, res) => {
  const { year, department, division } = req.body;
  console.log(year);
  console.log(department);
  console.log(division);
  
  try {
    const getlink = await pool.query(`SELECT link FROM defaulter WHERE year = $1 AND department = $2 AND division = $3`, [year, department, division]);
    
    console.log(getlink.rows);
    
    if (getlink.rows.length > 0) {
      res.json(getlink.rows[0].link);
    } else {
      res.status(404).json({ message: 'No link found for the provided criteria.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});





app.listen(4000,()=>{
  console.log(`Server started at port 4000`)
})


// module.exports=app;