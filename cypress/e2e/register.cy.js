/// <reference types="Cypress" /.
describe ("registration tests", () => {
})
it("register with invalid email address", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register")
    cy.get("#first-name").type("test")
    cy.get("#last-name").type("test")
    cy.get("#email").type("random1")
    cy.get("#password").type("nadapanic16")
    cy.get("#password-confirmation").type("nadapanic16")
    cy.get(":checkbox").check();
    cy.get("button").click();
    cy.url().should("contain", "/register")
})
it("register without marking checkbox", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register")
    cy.get("#first-name").type("test")
    cy.get("#last-name").type("test")
    cy.get("#email").type("random1@mail.com")
    cy.get("#password").type("nadapanic16")
    cy.get("#password-confirmation").type("nadapanic16")
    cy.get("button").click();
    cy.url().should("contain", "/register")
})
it("register with empty first name input field ", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register")
    cy.get("#last-name").type("test")
    cy.get("#email").type("random@mail.com")
    cy.get("#password").type("nadapanic16")
    cy.get("#password-confirmation").type("nadapanic16")
    cy.get(":checkbox").check();
    cy.get("button").click();
    cy.url().should("contain", "/register")
})
it("register without password confirmation", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register")
    cy.get("#first-name").type("test")
    cy.get("#last-name").type("test")
    cy.get("#email").type("random2@mail.com")
    cy.get("#password").type("nadapanic16")
    cy.get(":checkbox").check();
    cy.get("button").click();
    cy.url().should("contain", "/register")
})
it("register with password with less than 8 characters", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register")
    cy.get("#first-name").type("test")
    cy.get("#last-name").type("test")
    cy.get("#email").type("random2@mail.com")
    cy.get("#password").type("123")
    cy.get("#password-confirmation").type("123")
    cy.get(":checkbox").check();
    cy.get("button").click();
    cy.url().should("contain", "/register")
})
it("register with valid credentials", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register")
    cy.get("#first-name").type("test")
    cy.get("#last-name").type("test")
    cy.get("#email").type("random9@mail.com")
    cy.get("#password").type("nadapanic16")
    cy.get("#password-confirmation").type("nadapanic16")
    cy.get(":checkbox").check();
    cy.get("button").click();
    cy.url().should("not.contain", "/register")
})







