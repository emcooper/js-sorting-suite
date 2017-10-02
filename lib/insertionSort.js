function sort(array) {
  for (var i = 1; i < array.length; i++){
    current = array[i]
    var n = i - 1
    while (n >= 0 && current < array[n]) {
      prior = array[n]
      array[n+1] = prior
      array[n] = current
      n = n - 1
    }
  }
  return array
}

module.exports = sort
