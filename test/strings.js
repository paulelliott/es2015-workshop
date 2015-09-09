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
 *   - trim
 *
 * https://babeljs.io/docs/learn-es2015/#template-strings
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_strings
 */
const assert = require("assert");

describe('Strings', function() {
  describe('template strings', function () {
    it('can work just like normal strings', function () {
      const x = ``; // update the value of `x` here

      assert.equal(x, 'initial value', 'Update the value of `x` to be "initial value"');
    });

    it('can accept embedded variables', function() {
      const y = "value";
      const x = `initial `; // Add interpolation for "y" here

      assert.equal(x, 'initial value', `Use interpolation to embed "${y}"`);
    });

    it('can span multiple lines', function() {
      const x = `
      `;

      assert.equal(x, `
        initial value
      `, 'Update the value of `x` to be "initial value"');
    });
  });

  describe('#startsWith', function() {
    it('returns true if the string begins with the test string', function() {
      const x = 'initial value';

      assert.ok(x.startsWith('updated'), 'Change "initial" to "updated" in "x"');
    });
  });

  describe('#endsWith', function() {
    it('returns true if the string ends with the test string', function() {
      const x = 'initial ';

      assert.ok(x.endsWith('value'), 'Append "value" to "x"');
    });
  });

  describe('#includes', function() {
    it('returns true if the string includes the test string', function() {
      const x = 'inital value';

      assert.ok(x.includes('tial'), 'Fix the spelling of "initial" in "x"');
    });
  });

  describe('#repeat', function() {
    it('returns the string repeated some number of times', function() {
      const x = 'foobar'.repeat(1);

      assert.equal(x, 'foobarfoobarfoobar', 'Change the number of repeats');
    });
  });

  describe('#trim', function() {
    it('trims leading and trailing whitespace from the string', function() {
      const x = '    foobar    ';

      assert.equal(x, 'foobar', 'Add `.trim()` to "x"');
    });
  });
});
