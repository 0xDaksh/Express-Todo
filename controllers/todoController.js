var bodyParser = require('body-parser');
// MongoDB
var mongoose = require('mongoose');
// connecting MongoDB
mongoose.connect('mongodb://daksh:test123@ds059712.mlab.com:59712/todoappdm');

// create a schema - like a blueprint for mongoDB
var todoSchema = new mongoose.Schema({
  item: String
});
// Model of the MVC.
var Todo = mongoose.model('Todo', todoSchema);
// basic data/dummy data
// var data = [{item: 'get milk'}, {item: 'make an app'}, {item: 'watch a movie'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});
// exporting the controllers to the app.js
module.exports = function(app){
  // http verbs for handling requests and responses.
  app.get('/todo', function(req, res){
    // passing data. get data from mongo and pass through view
    Todo.find({}, function(err, data){
      if(err) throw err;
      res.render('todo', {todos: data});
    });
  });
  // middle ware added.
  // Don't forget the urlencodedParser, makes problems :P
  // get data and post to mongo
  app.post('/todo', urlencodedParser, function(req, res){
    var newTodo = Todo(req.body).save(function(err, data){
      if(err) throw err;
      res.json(data);
    })
    });
    // delete item from mongoNOW
  app.delete('/todo/:item',function(req, res){
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });
};
