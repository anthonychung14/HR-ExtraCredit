// deepClone
// Use recursion to return a deep clone of an object; any nested properties that are themselves objects are also cloned

// Example:
// var original = {
//   stringProp: 'this is a string',
//   boolProp: false,
//   objProp: {
//     numProp: 42
//   }
// };

// var clone = deepClone(original);
// clone === original   // should return false
// clone.objProp === original.objProp   // should also return false

// Extra credit: get it work with arrays too!

var deepClone = function(obj) {
  //declare new obj
  var newObj = {}

  //iterate through object, copying contents to new variable
  for (var key in object) {
    if (typeof object[key] === 'object') {
      deepClone(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj;
};
