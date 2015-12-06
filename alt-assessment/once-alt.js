// Write, selectiveHello, which returns a function that will 
// call a callback only when the correct password is supplied as an argument.

// var superSecret = protectedCall(function(){
//   console.log("Correct Password");
// }, "letmein");

// superSecret("pass"); //nothing happens
// superSecret("letmein"); //console logs 'Correct Password'

var protectedCall = function(callback, password) {
  //if password matches, allow callback to happen

}