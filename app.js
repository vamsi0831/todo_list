var express = require('express');
var app = express();
const path = require('path')
const dotenv = require('dotenv').config();

app.use(express.json());

// Serve static files from the 'frontend' directory
app.use(express.static('frontend'));

app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.sendFile(__dirname + '/frontend/js/app.js'); // Ensure the path is correct

});

require('./initDB')();


const TodoRoute = require('./Backend/Routes/todo.route');
app.use('/todos', TodoRoute);

  // // Route for the signup page
  // app.get('/signup', function(req, res){
  //   res.sendFile(__dirname, '/frontend/js/app.js');
  // })

  // // Route for the login page
  // app.get('/login', function(req, res){
  //   res.sendFile(__dirname, '/frontend/js/app.js');
  // })  
// });

// // Serve static files from the "frontend" directory
// app.use(express.static(path.join(__dirname, 'frontend/js/app.js')));

// // Route for the home page
// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, '/frontend/js/app.js'));
// });

// // Handle all other routes for SPA
// app.get('/signup', (req, res) => {
//     res.sendFile(path.join(__dirname, '/frontend/js/app.js'));
// });

app.listen(3000, function () {
  console.log(`Example app listening on port http://localhost:${3000}`);
});
