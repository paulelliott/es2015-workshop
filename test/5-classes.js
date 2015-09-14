/**
 * Section 5 - Classes
 *
 * - class definitions
 * - shorthand functions
 * - static functions
 * - extends
 * - super
 *
 * Further Reading:
 *
 * https://babeljs.io/docs/learn-es2015/#classes
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
const assert = require("assert");

describe('Section 5 - Classes', function() {
  describe('definitions', function () {
    it('uses method syntax', function () {
      class FutureMath {
        answer() {
          return 42;
        }
      };

      // TODO: Change the RHS to new FutureMath() and call the answer method on it
      const returnValue = 0;

      assert.equal(returnValue, 42, 'Leverage the answer method from the FutureMath class to meet the expectation');
    });

    it('supports constructors', function() {
      class FutureMath {
        constructor(publicationType='book') {
          this.answerSource = `Hitchhikers ${publicationType} to the Galaxy`;
        }
      };

      // TODO: Pass the appropriate value into the class constructor
      const returnValue = new FutureMath().answerSource;

      assert.equal(
        returnValue,
        'Hitchhikers Guide to the Galaxy',
        'Pass the correct value into the class constructor to produce the expected return value'
      );
    });

    it('supports static functions', function() {
      class FutureMath {
        static pie() {
          return 3.14;
        }
      };

      // TODO: Update the RHS to call the static function on the FutureMath class
      const returnValue = 0;

      assert.equal(returnValue, 3.14, 'Call FutureMath.pie() to get the expected return value');
    });
  });

  describe('extends', function() {
    it('extends another class with yours', function() {
      class FutureMath {
        answer() {
          return 42;
        }
      };

      // TODO: Extend FutureMath here to leverage the answer from FutureMath
      class PresentMath {
        theAnswer() {
          return `Not sure yet but rumors say ${this.answer()}`;
        }
      }

      const returnValue = new PresentMath().theAnswer();

      assert.equal(
        returnValue,
        'Not sure yet but rumors say 42',
        'Extend FutureMath to leverage the answer method'
      );
    });
  });

  describe('super', function() {
    it('provides access to overridden methods', function() {
      class FutureMath {
        answer() {
          return 42;
        }
      };

      class PresentMath extends FutureMath {
        answer() {
          // TODO: User super to call the answer from FutureMath
          return `Not sure yet but rumors say ${0}`;
        }
      }

      const returnValue = new PresentMath().answer();

      assert.equal(
        returnValue,
        'Not sure yet but rumors say 42',
        "Update the return value in PresentMath's answer to use super"
      );
    });
  });
});
