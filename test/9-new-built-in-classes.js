/**
 * Section 9 - New Built-In Classes
 *
 * - Set
 * - Map
 * - Reflect
 *
 * Further Reading:
 *
 * https://babeljs.io/docs/learn-es2015/#map-set-weak-map-weak-set
 * https://babeljs.io/docs/learn-es2015/#reflect-api
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 */
import assert from 'assert';

describe('Section 9 - New Built-In Classes', function() {
  describe('Set', function () {
    it('prevents duplicates', function () {
      const set = new Set();

      set.add(1).add(1).add(2).add(3);

      assert.deepEqual([...set], [1, 2, 3], 'Add items to the set to match the assertion');
    });

    it('can be initialized with an enumerable', function () {
      const array = [1, 1, 2, 2, 3, 3];

      const set = new Set(array);

      assert.deepEqual(new Array(...set), [1, 2, 3], 'Initialize `set` with the array');
    });
  });

  describe('Map', function () {
    it('can be initialized with a key/value array', function () {
      const map = new Map([
        [1, 'a'],
        ['b', 2]
      ]);

      assert.equal(map.get(1), 'a', "Pass an array to the initializer with `[1, 'a']` as the first element");
      assert.equal(map.get('b'), 2, "Add `['b', 2]` as another element to the initializing array");
    });

    it('allows easy iteration over values', function () {
      // Create a Map with some values.
      const map = new Map([
        ['one', 'first'],
        ['two', 'second'],
        ['three', 'third']
      ]);

      // Store the raw data from the Map here to verify.
      const keysAndValues = [];

      for (const [key, value] of map) {
        keysAndValues.push([key, value]);
      }

      assert.deepEqual(keysAndValues, [
        ['one', 'first'],
        ['two', 'second'],
        ['three', 'third']
      ], 'Iterate over the Map and store the key/value pairs in keysAndValues');
    });
  });

  describe('Reflect', function() {
    it('provides easy and reliable access to the keys of an object', function() {
      const o = {
        one: 'first',
        two: 'second',
        three: 'third'
      };

      const keys = Reflect.ownKeys(o);

      assert.deepEqual(keys, ['one', 'two', 'three'], 'Add properties to the object to match the expectation');
    });

    it('allows easy interrogation of properties', function() {
      const o = {
        one: 'first',
        two: undefined
      };

      // TODO: Use `Reflect.has` to determine if these properties exist
      const hasOne = Reflect.has(o, 'one');
      const hasTwo = Reflect.has(o, 'two');
      const hasThree = Reflect.has(o, 'three');

      assert.ok(hasOne, "Call `Reflect.has(o, 'one')` to determine if the property exists or not");
      assert.ok(hasTwo, "Call `Reflect.has(o, 'two')` to determine if the property exists or not");
      assert.ok(!hasThree, "The object does not have a `three` property so this should remian false");
    });
  });
});
