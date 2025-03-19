









// Plan


// Jasmine framework















// Jasmine is a framework for testing JavaScript code.
// It is as a tool to check if your code works as expected.









// Key Features

// - Human-readable syntax (easy to understand).
// - Works in browsers and Node.js.










// Syntax










// it()
// expect()
// .toEqual(), .toBeTrue(), .toContain()
// .not
// describe()
// .toBe()









// I will be using 'npx jasmine'
// command for this demo











// it()










// it() - a method which defines a single test
// It is the core of Jasmine framework.

// it accepts two parameters:
// -- test name as a string
// -- callback function



// Example:

// it('Should return true', () => {});

// Here:
// - 'Should return true' - is the name of the test.
// - () => {} - is the callback function with test logic.


// The callback function is executing the test.
// It is something you, as a developer, should write.











// expect()













// expect() - this is the main tool
// which allows you to compare things
// in Jasmine tests.
// It takes a value or actual result
// and returns an object with matcher methods.


// Matcher methods are:

// .toEqual()
// .toBeTrue()
// .toContain()
// and many more










// Example

// expect(1).toEqual(1);

// Here:

// expect(1) returns an object with
// matcher methods like .toEqual().

// .toEqual(1) is called on that object to compare
// the actual value (1) with the expected value (1).













// .toEqual()



// It checks if actual result
// equals to the expected result.






// Example

// Expect 1 to equal 1
// Expect true to equal true
// Expect false to equal false
// Expect "Toronto" to equal "Toronto"

// Or in general:
// "Expect something to equal something"









// Example

// In plain words:
// "Is 1 equal to 1?"

// in Jasmine syntax:
// expect(1).toEqual(1);








// In plain words:
// "Is 'Hello World' equal to 'Hello World'?"

// in Jasmine syntax:
// expect('Hello World').toEqual('Hello World');










// In plain words:
// "Is true equal to true?"

// in Jasmine syntax:
// expect(true).toEqual(true);








// You can't










// 1) You cannot use matcher methods directly
// on actual values without expect()

// expect(1).toEqual(1); // Works
// 1.toEqual(1); // Error

// expect('hello'.toEqual('hello'); // Works
// "hello".toEqual("hello"); // Error














// 2) You cannot use expect() outside
// of it() method

// expect(1).toEqual(1); // Error: 'expect' was used when there was no current spec











// So the right way to write a test would be:

// it('', () => expect(1).toEqual(1));





// Any of these will be incorrect:

// 1.toEqual(1); // SyntaxError: Invalid or unexpected token
// expect(1).toEqual(1); // Error: 'expect' was used when there was no current spec
// it(); expect(1).toEqual(1); // Error: 'expect' was used when there was no current spec









// Other popular matchers










// .toBeTrue()










// .toBeTrue() checks if
// actual result is true.



// You can do either way:

// expect(true).toEqual(true);
// expect(true).toBeTrue();


// .toEqual() is more generic
// .toBeTrue() is more specific
// it clearly communicates the intent
// of the test
// I would recommend to use .toBeTrue()
// whenever you check for a true value.













// You can use variables in your tests

// Instead of:

// expect(true).toBeTrue();


// You can:

// const someTruthyCondition = true;
// it('', () => expect(someTruthyCondition).toBeTrue());



// Or:

// const someTruthyCondition = 1 === 1;
// it('', () => expect(someTruthyCondition).toBeTrue());



// Or:

// it('', () => expect(1 === 1).toBeTrue());










// Please, remember that
// .toBeTrue() is a method
// and should be used with ()
// not .toBeTrue





// This will pass
// which is not what we expect
// to happen:

// it('', () => expect(1 === 2).toBeTrue);















// .toContain()










// .toContain() - checks if an array
// or string contains a value.



// Example

// it('', () => expect('hello world').toContain('hello'));
// it('', () => expect('hello world').toContain('h'));
// it('', () => expect([1, 2, 3]).toContain(1));












// .not











// .not - will negate the matcher check
// It can be used with any matcher
// (.toEqual(), .toContain(), .toBeTrue(), etc)




// Example

// it('', () => expect(1).not.toEqual(2));
// it('', () => expect(false).not.toBeTrue());
// it('', () => expect('hello').not.toContain('a'));
// it('', () => expect([1, 2, 3]).not.toContain(4));











// describe()








// describe() - groups different tests together





// Example


// describe('Math tests', () => {
//     it('should add 1 + 1', () => expect(1 + 1).toEqual(2));
//     it('should add 2 + 2', () => expect(2 + 2).toEqual(4));
// });









// I can nest describe() inside of other describe():

// describe('My tests', () => {
//     describe('Math tests', () => {
//         it('should add 1 + 1', () => expect(1 + 1).toEqual(2));
//         it('should add 2 + 2', () => expect(2 + 2).toEqual(4));
//     });
// });













// False positives










// False positives in Jasmine tests occur when
// a test incorrectly passes even though
// the code being tested has a bug or
// does not behave as expected.

// This can happen due to
// mistakes in your tests:

// - Incorrect assertions
// - Missing parentheses











// Examples of false positives in Jasmine
// tests and how to avoid them:







// 1) Missing parentheses on matchers:

// Bad:
// it('will always pass', () => expect(false).toBeTrue); // false positive

// Good:
// it('correct', () => expect(false).toBeTrue());









// 2) Not testing actual result:


// Bad:
// it('mistake in logic', () => {
//     const testMe = true;
//     const doNotTestMe = false;
//     expect(doNotTestMe).toBe(false); // false positive
// });

// Good:
// it('correct', () => {
//     const testMe = true;
//     const doNotTestMe = false;
//     expect(testMe).toBe(true);
// });




// Bad:
// const createArrayWith4 = () => [1, 2, 3];
// it('should fail but passes', () => {
//     const array = createArrayWith4();
//     expect([1, 2, 3, 4]).toContain(4); // False positive
// });


// Good:
// const createArrayWith4 = () => [1, 2, 3]; // fix by adding 4
// it('should fail but passes', () => {
//     const array = createArrayWith4();
//     expect(array).toContain(4);
// });














// Failures of Jasmine tests










// Tests will not always pass
// as it happened in all examples above.
// They may also fail.




// Example


// it('Array should contain string', () => expect([1, 2, 3]).toContain('1'));

// > npx jasmine
// The output will be:

// Failures:
//     1) Array should contain string
// Message:
//     Expected [ 1, 2, 3 ] to contain '1'.






// it('Array should contain 4', () => expect([1, 2, 3]).toContain(4));

// > npx jasmine
// The output will be:

// Array should contain 4
// Message:
//     Expected [ 1, 2, 3 ] to contain 4.












// .toBe()








// We have one more matcher left
// and I have it at the end on purpose.












// .toBe() - it is very similar to .toEqual()
// with one important distinction:

// .toBe() checks if two values are the same instance
// (they both point to the same memory location)
// or they are strictly equal.








// In JS we check for strictly equal with
// ===

// Example of strict equality:

// 1 === 1 // true
// 1 === '1' // false

// The 2nd check is false, because number 1
// does not strictly equal to string '1'.
// Their types do not match. Number type
// doesn't match String type.


// Example of not strict equality:

// 1 == 1 // true
// 1 == '1' // true

// These both are true, because JS
// doesn't compare the types, only
// values. They both have value 1.


// This happens due to type coercion.


// Example: 1 == '1'

// 1) Type Coercion: JS sees that I am
// comparing a number (1) and a string ('1').
// Js tries to convert the string to a number
// so that both values have the same type.
//
// 2) Conversion
// Js converts string '1' to the number 1.
//
// 3) Comparison
// Now, both values are numbers: 1 == 1.
// JS compares the value and evaluation is true.



// More examples:


// 0 == false; // true (type coercion happens)
// 0 === false; // false (no type coercion, different types)




// Always use ===











// Type coercion and + (plus)






// In case of a plus sing (+)
// any time there is at least one string
// involved, JS will try to concatenate
// two strings instead of doing math operation.





// Example
// add to console later

// 1 + 1; // 2
// 1 + '1'; // '11'
// '1' + 1; // '11'
// 'Hello' + 1; // 'Hello1'






// If you want to explicitly convert
// to number you can do either:

// - Number('1')
// - +'1'


// Example

// +'1' + 1; // 2
// 1 + +'1'; // 2
// 1 + Number('1'); // 2











// .toBe() vs .toEqual()












// Primitive values and .toBe()/.toEqual()


// So, with regard to primitive values
// (number, boolean)
// both .toBe() and .toEqual() are the same as ===


// Examples


// Numbers
// it('pass', () => expect(1).toBe(1)); // 1 === 1
// it('fail 1', () => expect(1).toBe('1')); // 1 === '1'
// it('fail 2', () => expect(1).toEqual('1')); // 1 === '1'

// Booleans
// it('pass 1', () => expect(true).toBe(true)); // true === true
// it('pass 2', () => expect(true).toEqual(true)); // true === true
// it('fail 1', () => expect(true).toBe(1)); // true === 1
// it('fail 2', () => expect(true).toBe('1')); // true === '1'
// it('fail 3', () => expect(true).toEqual(1)); // true === 1
// it('fail 4', () => expect(true).toEqual('1')); // true === '1'








// Objects/arrays and .toBe()/.toEqual()








// The difference between .toBe() and .toEqual()
// can be illustrated on objects or arrays.









// .toBe() will check if both objects are the
// same instance of an object
// or do they both point to the same memory location

// .toEqual() will check for the structure and value
// equality, not for the same memory location.



// Example

// const obj1 = { a: 1 };
// const obj2 = { a: 1 };
// it('fail', () => expect(obj1).toBe(obj2)); // Tip: To check for deep equality, use .toEqual() instead of .toBe().
// it('pass', () => expect(obj1).toEqual(obj2));


// const obj1 = { a: 1 };
// it('pass 1', () => expect(obj1).toBe(obj1));
// it('pass 2', () => expect(obj1).toEqual(obj1));









// Let me point two variables to the
// same object adn see how tests will work.


// const obj1 = { a: 1 };
// const obj2 = obj1;
// it('pass 1', () => expect(obj1).toBe(obj2));
// it('pass 2', () => expect(obj1).toEqual(obj2));









// Examples of arrays





// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
//
// it('fail', () => expect(arr1).toBe(arr2)); // Tip: To check for deep equality, use .toEqual() instead of .toBe().
// it('pass', () => expect(arr1).toEqual(arr2));




// const arr1 = [1, 2, 3];
// it('pass 1', () => expect(arr1).toBe(arr1));
// it('pass 2', () => expect(arr1).toEqual(arr1));




// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// it('pass 1', () => expect(arr1).toBe(arr2));
// it('pass 2', () => expect(arr1).toEqual(arr2));















// How to write tests








// Let's have a simple function
// which we want to test:




// Requirements:

// should return true if age is between 18 and 25 (inclusive).
// should return false if age is not between 18 and 25.
// should return 'You provided not a number' if age is not a number.



// The function
//
// const isValidAge = age => {
//     if (typeof age !== 'number') {
//         return 'You provided not a number';
//     }
//     return age >=18 && age <= 25; // try to use ||
// }


// Possible valid values are:
//
//         // 18, 19, 20, 21, 22, 23, 24, 25
//
//
//         // Boundaries in tests are:
//
//         // invalid:
//
//         // 17, 26
//
//
//         // valid:
//
//         // 18, 19, 24, 25


// Tests

// describe('isValidAge', () => {
//     const notANumberMessage = 'You provided not a number';
//
//     const testCases = [
//         // Edge cases
//         { input: 17, expected: false },
//         { input: 18, expected: true },
//         { input: 19, expected: true },
//         { input: 20, expected: true },
//         { input: 24, expected: true },
//         { input: 25, expected: true },
//         { input: 26, expected: false },
//         // Not number values
//         { input: 'not a number', expected: notANumberMessage },
//         { input: undefined, expected: notANumberMessage },
//         { input: null, expected: notANumberMessage },
//         { input: true, expected: notANumberMessage },
//         { input: {}, expected: notANumberMessage },
//     ];
//
//     testCases.forEach(({ input, expected }) =>
//         it(`should return ${expected} for ${input}`, () => expect(isValidAge(input)).toBe(expected))
//     );
// });
















// Mocks













// Let's talk about mocks and why they matter










// First let's illustrate the problem







// I have two functions:

// 1) to randomly generate a number
// 2) to check if provided number is less than
// randomly generated number




// 1)
// const generateRandomNumber = () => Math.random();



// 2)
// const isLessThanRandomNumber = number => {
//   const randomNumber = generateRandomNumber();
//   return number < randomNumber;
// };




// Now I want to write unit tests for 'isLessThanRandomNumber()'

// I can do this way:




// Let's have our function here

// note: I will define a Demo class here
// and have my functions as its properties
// just to make Jasmine easier to run in
// this lecture file.


// class Demo {
//     generateRandomNumber = () => Math.random();
//     isLessThanRandomNumber = number => {
//       const randomNumber = this.generateRandomNumber();
//       return number < randomNumber;
//     };
// }



// Let's have test below
// it('should return true if the generated random number is greater than my input number', () => {
//     const demo = new Demo();
//     const number = 0.5;
//     const result = demo.isLessThanRandomNumber(number);
//     expect(result).toBeTrue(); // May pass or fail unpredictably
// });




// Explanation

// If I will run > npx jasmine
// It may pass once
// Then it will fail
// Then may pass or fail again
// Because isLessThanRandomNumber()
// is using a random generator.
// It is not predictable
// and not reliable.










// To solve this problem we
// will use a mock for random
// function.








// Mock = not real function.









// In Jasmine you create mocks this way:

// 1) You spy over the original function.
// 2) You stub the value from that function.






// In other words, any time your test
// will try to call or use generator function,
// Jasmine will not call original function,
// because we will be spying on it,
// but instead Jasmine will return our stub data.








// Syntax of spy: spyOn(object, 'method')

// Syntax of spy + stub: spyOn(object, 'method').and.returnValue(value)













// Let's see updated test


// Let's have our function here

// class Demo {
//     generateRandomNumber = () => Math.random();
//     isLessThanRandomNumber = number => {
//         const randomNumber = this.generateRandomNumber(); // change to 4
//         return number < randomNumber;
//     };
// }


// Let's have test below


// describe('Demo', () => {
//     it('should return true if the generated random number is greater than my input number', () => {
//         const demo = new Demo();
//         const generatedNumberMock = 0.7;
//         const number = 0.5;
//         spyOn(demo, 'generateRandomNumber').and.returnValue(generatedNumberMock);
//         const result = demo.isLessThanRandomNumber(number);
//         expect(result).toBeTrue();
//     });
//
//     it('should return false if the generated random number is less than my input number', () => {
//         const demo = new Demo();
//         const generatedNumberMock = 0.3;
//         const number = 0.5;
//         spyOn(demo, 'generateRandomNumber').and.returnValue(generatedNumberMock);
//         const result = demo.isLessThanRandomNumber(number);
//         expect(result).toBeFalse();
//     });
//
//     it('should return false if the generated random number is equal to my input number', () => {
//         const demo = new Demo();
//         const generatedNumberMock = 0.5;
//         const number = 0.5;
//         spyOn(demo, 'generateRandomNumber').and.returnValue(generatedNumberMock);
//         const result = demo.isLessThanRandomNumber(number);
//         expect(result).toBeFalse();
//     });
//     it('should call generateRandomNumber if I use isLessThanRandomNumber', () => {
//         const demo = new Demo();
//         const generateSpy = spyOn(demo, 'generateRandomNumber'); // I saved my spy in the constant
//         demo.isLessThanRandomNumber(0);
//         expect(generateSpy).toHaveBeenCalled();
//     });
// });



// The same test but with beforeEach()

// beforeEach() will do what it says:
// it will do something which I specify
// before each of my tests.







// describe('Demo', () => {
//     let demo;
//
//     beforeEach(() => demo = new Demo());
//
//     it('should return true if the generated random number is greater than my input number', () => {
//         const generatedNumberMock = 0.7;
//         const number = 0.5;
//         spyOn(demo, 'generateRandomNumber').and.returnValue(generatedNumberMock);
//         const result = demo.isLessThanRandomNumber(number);
//         expect(result).toBeTrue();
//     });
//
//     it('should return false if the generated random number is less than my input number', () => {
//         const generatedNumberMock = 0.3;
//         const number = 0.5;
//         spyOn(demo, 'generateRandomNumber').and.returnValue(generatedNumberMock);
//         const result = demo.isLessThanRandomNumber(number);
//         expect(result).toBeFalse();
//     });
//
//     it('should return false if the generated random number is equal to my input number', () => {
//         const generatedNumberMock = 0.5;
//         const number = 0.5;
//         spyOn(demo, 'generateRandomNumber').and.returnValue(generatedNumberMock);
//         const result = demo.isLessThanRandomNumber(number);
//         expect(result).toBeFalse();
//     });
//     it('should call generateRandomNumber if I use isLessThanRandomNumber', () => {
//         const generateSpy = spyOn(demo, 'generateRandomNumber'); // I saved my spy in the constant
//         demo.isLessThanRandomNumber(0);
//         expect(generateSpy).toHaveBeenCalled();
//     });
// });










// If I update my code and run tests
// again, they will fail signaling to me
// that I added a bug into my code.

// My tests are important because
// they guard my code from accidental
// changes, which might break my app.























// Installation of Jasmine

// + how to install from zip
















// Let's install Jasmine in our project

// > mkdir demo
// > cd demo
// > npm init -y

// This will create a package.json file

// > npm install jasmine --save-dev

// This will install Jasmine library

// > npx jasmine init

// This will set up Jasmine settings



// As a result we will get this folder structure:

// demo/
// ├── node_modules/       # Installed dependencies
// ├── spec/              # Folder for your test files
// │   └── support/
// │       └── jasmine.json  # Configuration file
// ├── package.json       # Project configuration
// └── package-lock.json  # Dependency lock file




// All your test files should
// go inside /spec folder


// We usually name our tests files:
// filename.spec.ts


































// Thank you







