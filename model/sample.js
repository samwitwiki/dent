// grab the things we need
var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/myappdatabase');
var Schema = mongoose.Schema;

// create a schema
var userSchema = require('../schema/sample');

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users
// userSchema.methods.dudify = function() {
//   // add some stuff to the users name
//   this.name = this.name + '-dude';
//
//   return this.name;
// };

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('Sample', userSchema);

// make this available to our users in our Node applications
module.exports = User;
