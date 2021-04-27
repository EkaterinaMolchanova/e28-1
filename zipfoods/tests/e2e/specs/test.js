/*
These were the tests created in lecture
These tests have now been superseded by the individual
test specs I've add for each feature/page so I'm commenting them out
but leaving this file here for reference
*/

// describe('ZipFoods', () => {

//     // Define a product we can use throughout our tests
//     const product = {
//         name: 'Driscoll’s Strawberries',
//         id: 1
//     }

//     it('visits the homepage', () => {
//         cy.visit('/');
//         cy.contains('h2', 'Featured Products');
//     })

//     it('shows all the products', () => {
//         cy.visit('/products');
//         cy.contains('[data-test="product-name"]', product.name);
//         cy.get('[data-test="product-name"]').should('have.length', 10);

//         cy.get('[data-test="product-name"]').contains(product.name).click();
//         cy.contains('[data-test="product-price"]', '4.99');
//     })

//     it('interacts with cart', () => {
//         cy.visit('/product/' + product.id);
//         cy.get('[data-test="add-to-cart-button"]').click();
//         cy.contains('[data-test="cart-count"]', 1);
//         cy.visit('/cart');
//         cy.contains('[data-test="cart-contents"]', '1 x ' + product.name);
//         cy.get('[data-test="remove-from-cart-button"]').click();
//         cy.contains('[data-test="cart-count"]', 0);
//         cy.contains('No items');
//     })
// })
