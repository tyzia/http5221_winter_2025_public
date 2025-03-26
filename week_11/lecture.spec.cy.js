
























// Example clicking on 'focus' button
//
// it('visit and click', () => {
//     cy.visit('https://example.cypress.io/'); // this way I visit the page
//     cy.contains('focus').click(); // this way I find a button by label and clicked it
// });



// This demo is showing how to test
// - page loaded
// - button is present on the page
// - the button is clickable








// Example clicking on 'non-existing-button' button

// it('visit and click', () => {
//     cy.visit('https://example.cypress.io/');
//     cy.contains('non-existing-button').click();
// });












// .contains() - command in Cypress.

// It is used to find an element on the page
// that includes specific text.


// It can:

// - Search for text inside elements
// (like buttons, links, divs, etc.).

// - Return the first matching element.

// - Fail the test if the text is not found.





















// Assertions






// Assertions help to verify whether some conditions
// are met in my tests.


// Examples:

// - Is my element visible?
// - Does this div contain "Success"?
// - Is the checkbox checked?


// Cypress syntax has three methods for assertions:

// 1) .should()
// 2) .expect()
// 3) .assert()






// Examples of .should()

// cy.get('button').should('be.visible');
// cy.url().should('include', '/dashboard');
// cy.get('input').should('have.value', 'John');











// 'have.value' vs 'contain'

// should('have.value') => for input field values

// should('contain') => for DOM elements content, not exact match




















// For example



// <input name='username'>

// we will use .should('have.value')

// cy.get('input[name="username"]').should('have.value', 'exact match');




// <section class='notification'>You are all set</section>

// we will use .should('contain')

// cy.get('.notification').should('contain', 'You are');



















// Other assertions with .should():



// 'have.class' => input element has a class

// 'have.focus' => input element has focus

// 'be.visible' => DOM element is visible on the page
















// To test input value

// it('input a value', () => {
//     cy.visit('https://example.cypress.io/');
//     cy.contains('type').click();
//     cy.get('.action-email').type('andrei');
//     cy.get('.action-email').should('have.value', 'andrei');
// });


























// Variables

// it('input a value with variable', () => {
//     const name = 'andrei';
//     cy.visit('https://example.cypress.io/');
//     cy.contains('type').click();
//     cy.get('.action-email').type(name);
//     cy.get('.action-email').should('have.value', name);
// });





























// Test form submission and verify the result

// it('form submission', () => {
//     cy.visit('https://example.cypress.io/');
//     cy.contains('submit').click();
//     cy.get('.action-form').submit();
//     cy.get('.action-form').next().should('have.text', 'Your form has been submitted!');
// });

















// Tutorial: https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test














































// Thank you