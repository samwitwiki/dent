// if our user.js file is at app/models/user.js
var Sample = require('./model/sample');
// create a new user called chris
var chris = new Sample({
  name: 'Chris BROWNY3',
  username: 'sevilayha3',
  password: 'password',
  test: '123'
});
console.log("DITO");
// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
// chris.dudify(function(err, name) {
//   if (err) throw err;
//
//   console.log('Your new name is ' + name);
// });

// call the built-in save method to save to the database
chris.save(function(err) {

  if (err) throw err;
  console.log('User saved successfully!');
});
