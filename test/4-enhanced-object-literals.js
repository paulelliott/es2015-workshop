/**
 * Section 4 - Enhanced Object Literals
 *
 * - shorthands
 * - methods
 * - dynamic property names
 *
 * Further Reading:
 *
 * https://babeljs.io/docs/learn-es2015/#enhanced-object-literals
 */
const assert = require("assert");

describe('Section 4 - Enhanced Object Literals', function() {
  describe('shorthands', function () {
    it('automatically use scoped variables named the same as a key', function () {
      const v1 = '';

      const values = {
        // TODO: add `v1,` ** without a `:` or value ** to see it automatically expand
        v2: 'value2'
      };

      assert.equal(values.v1, 'value1', 'Add an automatically expanding variable to the object');
    });
  });

  describe('methods', function() {
    it('allow super', function() {
      const object = {
        // TODO: Change this to the shorthand function syntax
        v1: function() {
          // TODO: Uncomment this code to make the assertion pass
          // return super.toString();
        }
      };

      assert.equal(object.v1(), '[object Object]', 'Change the function to a method and uncomment the return line');
    });
  });

  describe('dynamic property names', function() {
    it('lets you build property names on the fly', function() {
      // TODO: Change the value of num to make the assertion pass
      const num = 0;

      const values = {
        [`v${num}`]: 'value1'
      };

      assert.equal(values.v1, 'value1', 'Update the value of "num" to match the expectation');
    });
  });
});
