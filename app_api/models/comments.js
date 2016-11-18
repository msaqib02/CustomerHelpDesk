var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var CommentSchema = new mongoose.Schema({

  email: String,
  message: String,
  userName: String,
  ticketId: String
});


mongoose.model('Comment', CommentSchema);
