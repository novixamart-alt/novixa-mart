const db = require('./database');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;


// Middleware
app.use(cors());
app.use(express.json());


// Test route
app.get('/', (req, res) => {

  res.json({
    message: "Novixa Mart Backend is Running 🚀"
  });

});


// Register API
app.post('/register', (req, res) => {

  const { name, email, password } = req.body;


  if(!name || !email || !password){

    return res.status(400).json({
      message: "Please fill all fields"
    });

  }


  const sql = `
    INSERT INTO users (name, email, password)
    VALUES (?, ?, ?)
  `;


  db.run(sql, [name, email, password], function(err){

    if(err){

      return res.status(400).json({
        message: err.message
      });

    }


    res.json({

      message: "User registered successfully",
      userId: this.lastID

    });


  });


});


// Start Server
app.listen(PORT, () => {

  console.log(`Server is running on http://localhost:${PORT}`);

});