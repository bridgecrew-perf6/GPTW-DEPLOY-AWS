/// <reference types="cypress" />

describe('Testing complete functionality of the website',() => {
    it('Login & app flow',() => {
        // GOES TO HOME PAGE
        cy.visit('http://localhost:3000/')
        // CLICKS ON LOGIN BUTTON
        cy.findByRole('button', {  name: /login/i}).click();
        // ENTERS EMAIL IN INPUT
        cy.findByRole('textbox', {  name: /email address/i}).type('arbaz.sayed@gmail.com');
        // ENTER PASSWORD IN INPUT
        cy.findByLabelText(/password/i).type('12345678');
        // CLICKS ON LOGIN BUTTON
        cy.findByRole('button', {  name: /sign in/i}).click();
        // WAITS FOR PRODUCTS TO FETCH
        cy.wait(3000)
        // CLICKS ON ALL PRODUCTS BUTTON
        cy.findByRole('button', {  name: /add products/i}).click();
        // CHECKSOUT ALL PRODUCTS
        cy.findByRole('button', {  name: /checkout all products/i}).click();
        // GO BACK TO RECOMMENDED PRODUCTS
        cy.findByRole('button', {  name: /go back\?/i}).click();
        // CLICK ON NAVBAR
        cy.get('[data-test=navbar-btn]').click();
        // GO BACK TO DASHBOARD
        cy.get('[data-test=navbar-dashboard]').click();
        // CLICK ON NAVBAR
        cy.get('[data-test=navbar-btn]').click();
        // GO TO PROFILE ROUTER
        cy.get('[data-test=navbar-profile]').click();
        // CLICK ON NAVBAR 
        cy.get('[data-test=navbar-btn]').click();
        // GO TO NAVBAR FAQ ROUTER
        cy.get('[data-test=navbar-faq]').click();
        // CLICK ON ALL FAQ BUTTONS
        cy.get('[data-test=faq-btn]').click({ multiple: true });
        // INPUT CEO IN INPUT BOX  
        cy.get('[data-test="faq-search"]').type('ceo');
        // CHECK DARK MODE TOGGLE
        cy.get('[data-test="dark-theme"]').click();
          // CLICK ON NAVBAR
        cy.get('[data-test=navbar-btn]').click();
        // CLICK ON LOGOUT BUTTON
        cy.get('[data-test=navbar-logout]').click();
    })
})