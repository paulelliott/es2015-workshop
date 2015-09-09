/**
 * Section 1 - Variables
 *
 * - let
 * - const
 *
 * https://babeljs.io/docs/learn-es2015/#let-const
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */
const assert = require("assert");

describe('Variables', function() {
  describe('let', function () {
    it('works similarly to var', function () {
      let x = ''; // update the value of `x` here

      assert.equal(x, 'initial value', 'Update the value of `x` to be "initial value"');
    });

    it('allows reassignment', function () {
      let x = 'initial value';

      // reassign `x` to "updated value" here

      assert.equal(x, 'updated value', 'Reassign `x` to "updated value"');
    });

    it('does not allow redefinition', function () {
      let x = 'initial value';

      // Uncomment to see it blow up but recomment to continue working.
      // let x = 'updated value';

      assert.fail('Redefine `x` and watch the whole test suite bomb out');
    });

    it('is only available in the scope it was defined in', function() {
      {
        var x = 'initial value';
      };

      assert.throws(function() {
        x;
      }, Error, 'Change `var` to `let` to trigger the error');
    });
  });

  describe('const', function () {
    it('works similarly to var', function () {
      const x = ''; // update the value of `x` here

      assert.equal(x, 'initial value', 'Update the value of `x` to be "initial value"');
    });

    it('does not allow reassignment', function () {
      const x = 'initial value';

      // Uncomment to see it blow up but recomment to continue working.
      // x = 'updated value';

      assert.fail('Reassign `x` and watch the whole test suite bomb out');
    });

    it('does not allow redefinition', function () {
      const x = 'initial value';

      // Uncomment to see it blow up but recomment to continue working.
      // var x = 'updated value';

      assert.fail('Redefine `x` and watch the whole test suite bomb out');
    });

    it('is only available in the scope it was defined in', function() {
      {
        var x = 'initial value';
      };

      assert.throws(function() {
        x;
      }, Error, 'Change `var` to `const` to trigger the error');
    });
  });
});
