
var mongoose = require('mongoose');
var Ticket = mongoose.model('Ticket');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.addTicket = function(req, res) {

  var ticket = new Ticket();

  ticket.email = req.body.email;
  ticket.title = req.body.title;
  ticket.description = req.body.description;
  ticket.reporter = req.body.reporter;
  ticket.status = 1;
  ticket.save(function(err) {
    res.status(200);
    res.json(ticket);
  });

};
module.exports.getAllTickets = function(req, res) {

   Ticket.find({}, function(err, tickets) {
    var userTickets = [];

    tickets.forEach(function(ticket) {
   //   userMap[user._id] = user;
        userTickets.push(ticket);
    });

    res.send(userTickets);  
  });
};
module.exports.getTicket = function(req, res) {
  console.log(req.body.id)
   Ticket.find({}, function(err, tickets) {
    var userTicket ;

    tickets.forEach(function(ticket) {
   //   userMap[user._id] = user;
        if(ticket._id = req.body.id)
          userTicket = ticket;
          
    });

    res.send(userTicket);  
  });
};