import assert from 'assert';

describe('Modules', function() {
  describe('default import', function () {
    it('provides easy access to something important', function () {
      assert.equal(answer(), 42, 'Add `import answer from \'lib/future-math\' at the top of this file');
    });
  });

  describe('named imports', function() {
    it('allows you to specify which functions to import', function() {
      assert.equal(pie, 3.14, 'Replace the import statement with `import answer, { pie } from \'lib/future-math\'');
    });
  });

  describe('wildcards', function() {
    it('allow inclusion of whole libraries', function() {
      assert.equal(math.floor(pie), 3, 'Add another import statement with `import answer, { pie, floor } from \'lib/future-math\'');
    });
  });
});
