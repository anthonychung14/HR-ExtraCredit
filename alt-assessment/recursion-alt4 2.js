 // Given this list of fish, write a recursive function that returns an object containing the total numbers of each fish.
// e.g. { shark: 1, grouper: 2, eel: 3, parrotfish: 3 }
// It's easier to do this through iteration, but use recursion anyway!

var fish = ['shark', 'grouper', 'eel', 'parrotfish', 'parrotfish', 'eel', 'grouper', 'eel', 'parrotfish'];

var fishCounter = function(fish) {
  var fishCount = {}

  var helperFish = function (arr) {
    if (arr.length === 0) {
      return;
    }
    fishCount[arr[0]] = fishCount[arr[0]]+1 || 1
    helperFish(arr.slice(1))
  }
  helperFish(fish)
  return fishCount
}
