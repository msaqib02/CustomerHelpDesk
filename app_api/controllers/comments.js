
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.addComment = function(req, res) {

  var comment = new Comment();

  comment.email = req.body.email;
  comment.message = req.body.message;
  comment.userName = req.body.userName;
  comment.ticketId = req.body.ticketId;
  comment.save(function(err) {
    res.status(200);
    res.json(comment);
  });

};
module.exports.getAllComments = function(req, res) {

   Comment.find({}, function(err, comments) {
    var userComments = [];

    comments.forEach(function(comment) {
     if(comment.ticketId = req.body.id)
          userComments.push(comment);
        
    });

    res.send(userComments);  
  });
};