/**
 * Section 6 - Modules
 *
 * - default import
 * - named imports
 * - aliased imports
 *
 * Further Reading:
 *
 * https://babeljs.io/docs/learn-es2015/#modules
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
 */
import assert from 'assert';

describe('Section 6 - Modules', function() {
  describe('default import', function () {
    it('provides easy access to something important', function () {
      // TODO: Add a second import statement under the one for the assert
      // library to import the default export as `answer`

      assert.equal(answer(), 42, 'Add `import answer from \'../lib/future-math\' at the top of this file');
    });
  });

  describe('named imports', function() {
    it('allows you to specify which functions to import', function() {
      // TODO: Modify the import statment you added in the last example to also
      // pull in the exported `pie` function

      assert.equal(pie, 3.14, 'Replace the import statement with `import answer, { pie } from \'../lib/future-math\'');
    });
  });

  describe('aliased imports', function() {
    it('allows you to rename imports', function() {
      // TODO: Modify the import statement again to import
      // removeEverythingAfterTheDecimal as the more sane name, "floor"

      assert.equal(math.floor(pie), 3, 'Add another import statement with `import answer, { pie, removeEverythingAfterTheDecimal as floor } from \'../lib/future-math\'');
    });
  });
});
