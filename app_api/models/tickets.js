var mongoose = require( 'mongoose' );


var ticketSchema = new mongoose.Schema({
 
  email: String,
  title: String,
  description: String,
  status: Number,
  reporter: String
});


mongoose.model('Ticket', ticketSchema);
