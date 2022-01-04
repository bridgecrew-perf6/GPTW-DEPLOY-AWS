/// <reference types="cypress" />

describe('Testing complete functionality of the website',() => {
    it('Login & app flow',() => {
        // GOES TO HOME PAGE
        cy.visit('http://localhost:3000/')
        // CLICKS ON REGISTER BUTTON
        cy.findByRole('button', {  name: /register/i}).click();
        // ENTERS FIRSTNAME IN INPUT
        cy.findByRole('textbox', {  name: /firstname/i}).type('Epson')
        // ENTER LASTNAME IN INPUT
        cy.findByRole('textbox', {  name: /lastname/i}).type('Jane')  
        // ENYER EMAIL ADDRESS
        cy.findByRole('textbox', {  name: /email address/i}).type('epson@jane.com')
        // ENTER PHONE NUMBER
        cy.findByRole('textbox', {  name: /phone number/i}).type('9022288777')
        // ENTER PASSWORD
        cy.findByLabelText(/password industry department/i).type('12345678');
        // SELECT BOX FOR INDUSTRY
        cy.get('#react-select-2-input').type('Advertising & Marketing');
        // SELECT BOX FOR DEPARTMENT
        cy.get('#react-select-3-input').type('Management');
        // /CLICK ON SUBMIT BUTTON
        cy.findByRole('button', {  name: /sign up/i}).click();
        // WAITS FOR PRODUCTS TO FETCH
        cy.wait(3000)
        // CLICKS ON ADD PRODUCTS BUTTON
        cy.findByRole('button', {  name: /add products/i}).click();
        // CHECKSOUT RECOMMENDED PRODUCTS
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