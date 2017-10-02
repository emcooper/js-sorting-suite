const assert = require('chai').assert;
const insertionSort = require('../lib/insertionSort')

describe('insertion sort functionality', function() {
  context('sort function', function(){
    it('sorts an array', function(){
      assert.deepEqual(insertionSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
    })
  })
})
