var express = require('express');
var app = express();
// adding a controller.
var todoController = require('./controllers/todoController');

//set up template
app.set('view engine', 'ejs');

//static
app.use(express.static('./public'));
// fire controllers
todoController(app);

// listen to port
app.listen(8000, function(){
  console.log('you are on port 3000');
});
