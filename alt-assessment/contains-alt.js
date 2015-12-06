var each = function(array, callback) {
  for(var i=0; i < array.length; i++) {
    callback(array[i]);
  }
};

var find = function(array, key, value) {
  var result;
  each(array, function(object) {
    for (var searchKey in object) {
      if (searchKey === key && object[searchKey] === value) { 
        result = object;
      }
    }
  })
  return result
};

find(stuff,'age', 30)

// Find should return the first element whose property `key` has
// a value of `value`. It should use the `each` function defined above.
// find



var stuff = [{name: 'allen', age: 24}, {name: 'fred', age: 30},{name: 'marcus', age: 30}] 



// returns {name: 'fred', age: 30}

