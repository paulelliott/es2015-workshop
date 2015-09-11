# ES2015 Workshop

## Setup

- `git clone git@github.com:paulelliott/es2015-workshop.git`
- Install node 0.12+ or iojs
  - On OSX with hombrew: `brew install node`
  - Direct Download: https://nodejs.org
- `npm install`
- `npm test`
- You should see a friendly message from mocha showing all tests failing

## Instructions

- Open the file in each section in your favorite editor
- Run the tests against the file using the `npm test` command provided with each section
- Verify the tests all fail
- Fix each `it` block one at a time and get them to pass.
  - DO NOT change any `assert` lines. You should only change the code leading up to the asserts.
  - Read the failure message and the comments throughout the files. They are there to guide you through the concepts.
  - Don't cheat! There are shortcuts to getting the tests to pass, but this is about learning ES2015 concepts and not passing tests.

* IMPORTANT: Once you get the tests in a file to pass, feel free to play with the code and experiment with the concepts!

## Section 1 - Variables

`npm test test/1-variables.js`

- let
- const

## Section 2 - Strings

`npm test test/2-strings.js`

- interpolation
- template strings
- new String methods via polyfill
  - startsWith
  - endsWith
  - includes
  - repeat
  - trim

## Section 3 - Functions

`npm test test/3-functions.js`

- fat arrows
- single line functions with implicit returns
- default parameters
- spread

## Section 4 - Enhanced Object Literals

`npm test test/4-enhanced-object-literals.js`

- shorthands
- methods
- dynamic property names

## Section 5 - Classes

`npm test test/5-classes.js`

- class definitions
- shorthand functions
- static functions
- extends
- super

## Section 6 - Modules

`npm test test/6-modules.js`

- default import
- named imports
- wildcard imports

## Section 7 - Destructuring

`npm test test/7-destructuring.js`

- array matching
- object matching
- nested object matching
- default values

## Section 8 - Arrays

`npm test test/8-arrays.js`

- spread
- for...of
- Iterators

## Section 9 - New Built-In Classes

`npm test test/9-new-built-in-classes.js`

- Set
- Map
- Reflect
