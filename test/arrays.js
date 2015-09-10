/**
 * Section 8 - Arrays
 *
 * - spread (...)
 * - for...of
 * - Iterators
 *
 * Further Reading:
 *
 * https://babeljs.io/docs/learn-es2015/#default-rest-spread
 * https://babeljs.io/docs/learn-es2015/#iterators-for-of
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator
 */
import assert from 'assert';

describe('Arrays', function() {
  describe('spread', function () {
    it('destructures an array', function () {
      const a = [1, 2]

      // TODO: Add the spread operator to flatten a into b.
      const b = [a, 3];

      assert.deepEqual(b, [1, 2, 3], 'Insert the spread operator before `a`');
    });

    it('is useful in function calls', function () {
      const fx = (a, b, c) => {
        assert.deepEqual([a, b, c], [1, 2, 3], 'Insert the spread operator before the array in the function call');
      };

      // TODO: Add the spread operator to pass the array values in as separate arguments.
      fx([1, 2, 3]);
    });
  });

  describe('for..of', function () {
    /**
     * The traditional for...in statement returns the index of the array instead of the value at each iteration.
     *
     * The new for...of statement returns the values of the array, which is what you actually want most of the time.
     */
    it('iterates over array elements instead of indexes', function () {
      const initialValues = [4, 5, 6];
      const copiedValues = [];

      // TODO: Change this loop to a for...of iterator
      for (const i in initialValues) {
        copiedValues.push(i);
      }

      assert.deepEqual(copiedValues, [4, 5, 6], 'Change for..in to for..of');
    });
  });

  describe('Iterators', function () {
    it('allow you to define custom iteration', function () {
      // Create an iterator.
      const powersOfTwo = {
        // Defines an iterator function using the dynamic property names we talked about earlier.
        [Symbol.iterator]() {
          let value = 1;
          let count = 0;

          return {
            // The next function allows you to define what happens with each iteration.
            next() {
              // Keep count of how many times we iterate so we don't overflow.
              count += 1;

              // TODO: Add some code here to increase `value` with each iteration.

              /**
               * done: false means we've reached the end. The value returned with it will be discarded.
               * value: the value provided for this iteration.
               */
              return { done: count === 5, value: value }
            }
          }
        }
      }

      // Create an array to store our generated values so we have something to assert against.
      const powers = [];

      // Use the iterator like you would a normal array.
      for (const power of powersOfTwo) {
        powers.push(power);
      }

      // Only goes to 16 because 32 returned `done: false`.
      assert.deepEqual(powers, [2, 4, 8, 16], 'Change the code in `next` to iterate appropriately');
    });
  });
});
