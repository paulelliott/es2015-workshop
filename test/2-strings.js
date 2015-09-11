/**
 * Section 2 - Strings
 *
 * - interpolation
 * - template strings
 * - new String methods via polyfill
 *   - startsWith
 *   - endsWith
 *   - includes
 *   - repeat
 *
 * Further Reading:
 *
 * https://babeljs.io/docs/learn-es2015/#template-strings
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_strings
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 */
const assert = require("assert");

describe('Section 2 - Strings', function() {
  describe('template strings', function () {
    it('can work just like normal strings', function () {
      // TODO: update the value of `x` here
      const x = `initial value`;

      assert.equal(x, 'initial value', 'Update the value of `x` to be "initial value"');
    });

    it('can accept embedded variables', function() {
      const y = "value";
      // TODO: Interpolate the value of y into x
      const x = `initial ${y}`;

      assert.equal(x, 'initial value', `Use interpolation to embed "${y}"`);
    });

    it('can span multiple lines', function() {
      // TODO: Update this string to match the expectation
      const x = `
        initial value
      `;

      assert.equal(x, `
        initial value
      `, 'Update the value of `x` to be "initial value"');
    });
  });

  describe('#startsWith', function() {
    it('returns true if the string begins with the test string', function() {
      // TODO: Change initial to updated to make the expectation pass
      const x = 'updated value';

      assert.ok(x.startsWith('updated'), 'Change "initial" to "updated" in "x"');
    });
  });

  describe('#endsWith', function() {
    it('returns true if the string ends with the test string', function() {
      // TODO: Append value to this string to make the expectation pass
      const x = 'initial value';

      assert.ok(x.endsWith('value'), 'Append "value" to "x"');
    });
  });

  describe('#includes', function() {
    it('returns true if the string includes the test string', function() {
      // TODO: Fix the spelling of initial here to make the expectation pass
      const x = 'initial value';

      assert.ok(x.includes('tial'), 'Fix the spelling of "initial" in "x"');
    });
  });

  describe('#repeat', function() {
    it('returns the string repeated some number of times', function() {
      // TODO: Change the value passed to repeat here to make the expectation pass
      const x = 'foobar'.repeat(3);

      assert.equal(x, 'foobarfoobarfoobar', 'Change the number of repeats');
    });
  });
});
