/**
 * Section 7 - Destructuring
 *
 * - array matching
 * - object matching
 * - nested object matching
 * - default values
 *
 * Further Reading:
 *
 * https://babeljs.io/docs/learn-es2015/#destructuring
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
import assert from 'assert';

describe('Section 7 - Destructuring', function() {
  describe('array matching', function () {
    it('declares variables from array elements', function () {
      // TODO: Add a, b, c to the inside of the array on the LHS
      const [] = [1, 2, 3]

      assert.deepEqual(
        [a, b, c], [1, 2, 3], 'Add a, b, and c to the left-hand side of the array'
      );
    });

    it('allows skipping elements we do not care about', function() {
      // TODO: Add "a, , c" to the LHS of the array
      const [] = [1, 2, 3]

      assert.deepEqual(
        [a, c], [1, 3], 'Add a and c to the left-hand side of the array'
      );

      try {
        b;
        throw("You shouldn't have defined b...");
      } catch(e) {
        assert.equal(e, 'ReferenceError: b is not defined', 'Skip b in the array. I know...it looks weird with two commas next to each other');
      }
    });

    it('allows you to specify defaults', function() {
      // TODO: Specify a default value in the LHS array
      const [a] = []

      assert.equal(a, 1, 'Specify a default value for a on the left-hand side to match the expectation');
    });
  });

  describe('object matching', function () {
    it('declares variables from objects properties', function () {
      // TODO: Add "a, b, c" to the LHS object
      const {} = { a: 1, b: 2, c: 3 }

      assert.deepEqual(
        [a, b, c], [1, 2, 3], 'Add a, b, and c to the object in the left-hand side of the declaration'
      );
    });

    it('allows skipping elements we do not care about', function() {
      // TODO: Add "a, c" to the LHS object
      const {} = { a: 1, b: 2, c: 3 }

      assert.deepEqual(
        [a, c], [1, 3], 'Add a and c to the empty object on the left-hand side of the assignment'
      );

      try {
        b;
        throw("You shouldn't have defined b...");
      } catch(e) {
        assert.equal(e, 'ReferenceError: b is not defined', 'Skip b in the object properties. I know...it looks weird with two commas next to each other');
      }
    });

    it('allows you to specify defaults', function() {
      // TODO: Specify a default in the LHS object
      const {a} = {}

      assert.equal(a, 1, 'Specify a default value for a on the left-hand side to match the expectation');
    });
  });

  describe('nested object matching', function() {
    it('declares locals from a nested object', function() {
      const {
        // TODO: Add "b, c" to this object to declare them as local variables
        a: {}
      } = {
        a: { b: 2, c: 3 }
      };

      assert.deepEqual(
        [b, c], [2, 3], 'Add b and c to the empty object in the left-hand side of the declaration'
      );
    });

    it('allows renames', function() {
      const {
        // TODO: Add "c: d" to this object to rename the variable from the source object
        a: {}
      } = {
        a: { c: 3 }
      };

      assert.equal(d, 3, 'Add `c: d` to the empty object in the left-hand side of the declaration');
    });
  });
});
