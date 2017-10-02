const assert = require('chai').assert;
const bubbleSort = require('../lib/bubbleSort')

describe('bubble sort functionality', function() {
  context('sort function', function(){
    it('it sorts an array', function(){
      assert.deepEqual(bubbleSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
    })
  })
})
