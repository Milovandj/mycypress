/// <refernce types="Cypress" />
import { loginPage } from "../page_objects/loginPage";
import { allGalleries } from "../page_objects/allGalleriesPage";

describe("all galleries tests using POM", () => {
    beforeEach("visit the app and log in", () => {
       // cy.visit("/login");
       // loginPage.login("testtest123@gmail.com", "nadapanic16")
        //cy.url().should("not.include", "/login");
        cy.loginViaBackend()
        cy.visit("/");
        cy.registerViaBackend("testtttt","testtttt","abc123@gmail.com","nadapanic16")
    })

    it("all galleries succesfuly loaded", () => {
      allGalleries.allGalleriesHeading
      .should("be.visible")
      .and("have.text", "All Galleries");
      cy.get("button").should("have.length", 2)
    });

    it("test pagination", () => {
        allGalleries.allGalleries.should("be.visible").and("have.length", 10);
        allGalleries.loadMoreBtn.click();
        allGalleries.allGalleries.should("be.visible").and("have.length", 20);
        allGalleries.loadMoreBtn.click();
        allGalleries.allGalleries.should("be.visible").and("have.length", 30);
      });
    
      it("test search", () => {
        allGalleries.search("gggggg");
        allGalleries.allGalleries.should("be.visible");
        cy.wait(500)
        allGalleries.singleGalleryHeading.click()
        cy.get("h1").should("have.text", "searchTerm")
      });
})