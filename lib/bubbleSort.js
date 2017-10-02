function sort(array) {
  for (var n = 0; n < array.length; n++) {
    for (var i = 0; i < array.length; i++) {
      current = array[i];
      next = array[i+1];
       if (current > next) {
         array[i] = next
         array[i+1] = current
       }
    }
}
  return array
}



module.exports = sort
