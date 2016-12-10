// exporting the controllers to the app.js
module.exports = function(app){
  // http verbs for handling requests and responses.
  app.get('/todo', function(req, res){
    res.render('');
  });
  app.post('/todo', function(req, res){

  });
  app.delete('/todo', function(req, res){

  });
};
