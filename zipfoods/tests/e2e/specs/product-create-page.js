describe('Product Create Page', () => {

    // Test product
    const product = {
        name: 'My New Product',
        // Append a Unix timestamp to the end of the slug, ensuring it’s a unique value
        sku: 'my-new-product-' + Date.now(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pulvinar libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        available: 10,
        price: 4.99,
        weight: .05,
    }

    it('adds a new product', () => {

        // First we have to login, because only auth’d users can add products
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.login();

        // Go to the "Add a product page"
        cy.visit('/product/new');

        // Enter the details for a new product
        cy.get('[data-test=product-name-input]').clear().type(product.name);
        cy.get('[data-test=product-sku-input]').clear().type(product.sku);
        cy.get('[data-test=product-price-input]').clear().type(product.price);
        cy.get('[data-test=product-available-input]').clear().type(product.available);
        cy.get('[data-test=product-weight-input]').clear().type(product.weight);
        cy.get('[data-test=product-perishable-checkbox]').check();
        cy.get('[data-test=product-description-textarea]').clear().type(product.description);

        // Submit the form
        cy.get('[data-test=add-product-button]').click();

        // Assert we see a confirmation message
        cy.get('[data-test=product-added-confirmation]').should('exist');

        // Go to the products page and confirm our new product is visible there
        cy.visit('/products');
        cy.contains(product.name);
    });

    it('shows error messages when blurring off a field', () => {

        cy.login();

        // Go to the "Add a product page"
        cy.visit('/product/new');

        // Make sure product name input is blank
        cy.get('[data-test=product-name-input]').clear();

        // Click on the next field to trigger the client-side validation
        cy.get('[data-test=product-sku-input]').click();

        // Assert we see validation feedback
        cy.contains("The name field is required.");
    });

    it('shows error messages if the sku is already taken', () => {

        cy.login();

        // Go to the "Add a product page"
        cy.visit('/product/new');

        // Try a SKU we know is taken
        cy.get('[data-test=product-sku-input]').clear().type('driscolls-strawberries');
        cy.get('[data-test=add-product-button]').click();

        // Assert we see validation feedback
        cy.contains("The sku has already been taken.");
    });
})