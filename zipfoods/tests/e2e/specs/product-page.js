describe('Product Page', () => {

    // Test product
    const product = {
        name: 'Driscoll’s Strawberries',
        id: 1
    }

    it('shows a product', () => {
        cy.visit('/product/' + product.id);
        cy.contains('[data-test="product-name"]', product.name);
    })

    it('adds to cart', () => {
        cy.visit('/product/' + product.id);

        cy.get('[data-test="add-to-cart-button"]').click();

        cy.get('[data-test="add-to-cart-confirmation"]').should('exist');
        cy.contains('[data-test="cart-count"]', 1);
    })
})