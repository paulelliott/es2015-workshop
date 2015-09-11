/**
 * Section 1 - Variables
 *
 * - let
 * - const
 *
 * Further Reading:
 *
 * https://babeljs.io/docs/learn-es2015/#let-const
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */
const assert = require("assert");

describe('Section 1 - Variables', function() {
  describe('let', function () {
    it('works similarly to var', function () {
      // TODO: update the value of `x` here
      let x = 'initial value';

      assert.equal(x, 'initial value', 'Update the value of `x` to be "initial value"');
    });

    it('allows reassignment', function () {
      let x = 'initial value';

      // TODO: reassign `x` to "updated value" here
      x = 'updated value';

      assert.equal(x, 'updated value', 'Reassign `x` to "updated value"');
    });

    it('does not allow redefinition', function () {
      let x = 'initial value';

      assert.fail('Redefine `x` and watch the whole test suite bomb out');
    });

    it('is only available in the scope it was defined in', function() {
      {
        // TODO: Change this var to a let
        let x = 'initial value';
      };

      assert.throws(function() {
        x;
      }, Error, 'Change `var` to `let` to trigger the error');
    });
  });

  describe('const', function () {
    it('works similarly to var', function () {
      // TODO: update the value of `x` here
      const x = 'initial value';

      assert.equal(x, 'initial value', 'Update the value of `x` to be "initial value"');
    });

    it('does not allow reassignment', function () {
      const x = 'initial value';

      assert.fail('Reassign `x` and watch the whole test suite bomb out');
    });

    it('does not allow redefinition', function () {
      const x = 'initial value';

      assert.fail('Redefine `x` and watch the whole test suite bomb out');
    });

    it('is only available in the scope it was defined in', function() {
      {
        // TODO: Change this var to a let
        const x = 'initial value';
      };

      assert.throws(function() {
        x;
      }, Error, 'Change `var` to `const` to trigger the error');
    });
  });
});
