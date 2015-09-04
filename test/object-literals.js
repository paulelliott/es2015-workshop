const assert = require("assert");

describe('Object Literals', function() {
  describe('shorthands', function () {
    it('automatically use scoped variables named the same as a key', function () {
      const v1 = '';

      const values = {
        v1,
        v2: 'value2'
      };

      assert.equal(values.v1, 'value1', 'Update the value of "const v1" to match the expectation');
    });
  });

  describe('methods', function() {
    it('accepts a shorthand declaration', function() {
      const values = {
        v1() {
          return '';
        }
      };

      assert.equal(values.v1(), 'value1', 'Update the return value of the "v1" function to match the expectation');
    });
  });

  describe('dynamic property names', function() {
    it('lets you build property names on the fly', function() {
      const num = 0;

      const values = {
        [`v${num}`]: 'value1'
      };

      assert.equal(values.v1, 'value1', 'Update the value of "num" to match the expectation');
    });
  });
});
