const assert = require("assert");

describe('Functions', function() {
  describe('fat arrows', function () {
    it('do not need parameters but still need parens', function () {
      const func = () => {
        return '';
      };

      assert.equal(func(), 'initial value', 'Update the return value of the function to match the expectation');
    });

    it('do not need parens with a single parameter', function() {
      const func = arg1 => {
        return `${arg1} `;
      };

      assert.equal(func('initial'), 'initial value', 'Update the return value of the function to match the expectation');
    });

    it('can accept multiple arguments', function() {
      const func = (arg1, arg2) => {
        return `${arg1} `;
      };

      assert.equal(func('initial', 'value'), 'initial value', 'Update the return value of the function to match the expectation');
    });

    it('shares "this" with the surrounding code', function() {
      this.value = 'value';

      const func = function(arg1) {
        return `${arg1} ${this.value}`;
      };

      assert.equal(func('initial'), 'initial value', 'Change the function to a fat arrow');
    });

    it('can be written on a single line with an implicit return', function() {
      const func = () => 'initial';

      assert.equal(func(), 'initial value', 'Update the return value of the function to match the expectation');
    });
  });

  describe('default parameters', function() {
    it('allow you to provide a default if one is not passed in', function() {
      const func = (arg1='') => arg1;

      assert.equal(func(), 'initial value', 'Update the default value of arg1 to match the expectation');
    });

    it('do not default null values', function() {
      const func = (arg1='initial value') => arg1;

      assert.equal(func(null), 'initial value', 'Change the function body to match the expectation');
    });
  });

  describe('spread', function() {
    it('allows you to set defaults', function() {
      const func = (...allTheArgs) => allTheArgs;

      assert.equal(func('a', 'b', 'c'), 3, 'Return the length of "allTheArgs" to match the expectation');
    });
  });
});
