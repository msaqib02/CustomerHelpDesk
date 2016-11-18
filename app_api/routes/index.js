var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ticketCtrl = require('../controllers/tickets');
var commentsCtrl = require('../controllers/comments');
// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/addTicket', ticketCtrl.addTicket);
router.get('/getTickets', ticketCtrl.getAllTickets);
router.post('/getTicket',ticketCtrl.getTicket);
router.post('/addComment', commentsCtrl.addComment);
router.post('/getAllComments', commentsCtrl.getAllComments);
module.exports = router;
