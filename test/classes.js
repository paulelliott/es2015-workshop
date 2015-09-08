const assert = require("assert");

describe('Classes', function() {
  describe('definitions', function () {
    it('uses shorthand function syntax', function () {
      class FutureMath {
        answer() {
          return 0;
        }
      };

      const futureMath = new FutureMath();

      assert.equal(futureMath.answer(), 42, 'Update the return value of "answer" to match the expectation');
    });

    it('supports constructors', function() {
      class FutureMath {
        constructor() {
          this.answerSource = '';
        }

        answer() {
          return 42;
        }
      };

      const futureMath = new FutureMath();

      assert.equal(
        futureMath.answerSource,
        'Hitchhikers Guide to the Galaxy',
        'Update the return value of "answer" to match the expectation'
      );
    });

    it('supports static functions', function() {
      class FutureMath {
        answer() {
          return 42;
        }

        static pie() {
          return 0;
        }
      };

      assert.equal(FutureMath.pie(), 3.14, 'Update the return value of "pie" to match the expectation');
    });
  });

  describe('extends', function() {
    it('extends another class with yours', function() {
      class FutureMath {
        answer() {
          return 42;
        }
      };

      class PresentMath /* extends FutureMath */ {
        theAnswer() {
          return `Not sure yet but rumors say ${this.answer()}`;
        }
      }

      const presentMath = new PresentMath();

      assert.equal(
        presentMath.theAnswer(),
        'Not sure yet but rumors say 42',
        'Fix the extends declaration on PresentMath'
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
          return `Not sure yet but rumors say ${answer()}`;
        }
      }

      const presentMath = new PresentMath();

      assert.equal(
        presentMath.answer(),
        'Not sure yet but rumors say 42',
        'Update the call to answer to use `super`'
      );
    });
  });
});
