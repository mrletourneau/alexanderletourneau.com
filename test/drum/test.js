var parseSeq = require("../../html/drum/drum.js");

var assert = require('assert');

describe('Test', function() {
  describe('#test', function() {
    it('should return true no matter what', function() {
      assert.equal(parseSeq.test(), true);
    });
  });
});
