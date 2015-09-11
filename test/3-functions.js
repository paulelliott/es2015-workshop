/**
 * Section 3 - Functions
 *
 * - fat arrows
 * - single line functions with implicit returns
 * - default parameter values
 * - spread
 *
 * Further Reading:
 *
 * https://babeljs.io/docs/learn-es2015/#arrows-and-lexical-this
 * https://babeljs.io/docs/learn-es2015/#default-rest-spread
 */
const assert = require("assert");

describe('Section 3 - Functions', function() {
  describe('fat arrows', function () {
    it('do not need parameters but still need parens', function () {
      const func = () => {
        // TODO: Change the return value here to "initial value"
        return '';
      };

      assert.equal(func(), 'initial value', 'Update the return value of the function to match the expectation');
    });

    it('do not need parens with a single parameter', function() {
      const func = arg1 => {
        // TODO: The expectation passed initial so add "value" to the end of this string
        return `${arg1}`;
      };

      assert.equal(func('initial'), 'initial value', 'Update the return value of the function to match the expectation');
    });

    it('can accept multiple arguments', function() {
      const func = (arg1, arg2) => {
        // TODO: Update the return value to match the expectation
        return `${arg1}`;
      };

      assert.equal(func('initial', 'value'), 'initial value', 'Update the return value of the function to match the expectation');
    });

    it('shares "this" with the surrounding code', function() {
      this.value = 'value';

      // TODO: Change this from a function to a =>
      const func = function(arg1) {
        return `${arg1} ${this.value}`;
      };

      assert.equal(func('initial'), 'initial value', 'Change the function to a fat arrow');
    });

    it('can be written on a single line with an implicit return', function() {
      const func = () => 'initial value';

      // TODO: Call the function to get the implicitly returned value
      const returnValue = '';

      assert.equal(returnValue, 'initial value', 'Change the RHS of returnValue to get the implicitly returned value');
    });
  });

  describe('default parameter values', function() {
    it('allow you to provide a default if one is not passed in', function() {
      const func = (arg1='initial value') => arg1;

      // TODO: Call the function so that the default value is invoked
      const returnValue = '';

      assert.equal(returnValue, 'initial value', "Change the RHS of returnValue to leverage the function's default");
    });

    it('do not default null values', function() {
      const func = (arg1='initial value') => arg1;

      // TODO: Change the arguments to match the expectation
      const returnValue = func(null);

      assert.equal(returnValue, 'initial value', 'Change the arguments to match the expectation');
    });
  });

  describe('spread', function() {
    it('allows you to set defaults', function() {
      const func = (...allTheArgs) => allTheArgs.length;

      // TODO: Call the function correctly to produce a return value matching the expectation
      const returnValue = func();

      assert.equal(returnValue, 3, 'Pass arguments to the function call to produce the correct return value');
    });
  });
});
