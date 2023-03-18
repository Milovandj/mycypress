/// <refernce types="Cypress" />
import { loginPage } from "../page_objects/loginPage";
import { createGallery } from "../page_objects/createGalleryPage";
import { faker } from "@faker-js/faker";
let galleryData = {
    title: faker.name.firstName(),
    description: faker.lorem.text(),
    imageUrl: faker.image.imageUrl()
  };

describe("create gallery tests using POM", () => {
    let galleryId;
    beforeEach("visit the app and click on the create gallery button", () => {
        cy.visit("/login");
        loginPage.login("milovandjuric996@gmail.com", "milovandjuric96")
        cy.url().should("not.include", "/login");
    })
    it("create gallery with a one-letter title ", () => {
        createGallery.createGalleryLink.click()
        createGallery.galleryTitleInput.type(galleryData.title[1])
        createGallery.imageUrlInput.type("https://pixnio.com/free-images/2023/03/13/2023-03-13-16-32-04-576x576.jpg.")
        createGallery.submitBtn.click();
        createGallery.errorMessage
        .should("be.visible")
        .and("have.text","The title must be at least 2 characters.")
    });
    
    it("image url in wrong format", () => {
        createGallery.createGalleryLink.click()
        createGallery.galleryTitleInput.type(galleryData.title)
        createGallery.imageUrlInput.type("galleryData.imageUrl")
        createGallery.submitBtn.click();
        createGallery.errorMessage
        .should("be.visible")
        .and("have.text","Wrong format of image")
    });
    it("delete image url button functionality", () => {
        createGallery.createGalleryLink.click();
        createGallery.imageUrlInput.type("https://pixnio.com/free-images/2023/03/13/2023-03-13-16-32-04-576x576.jpg.")
        createGallery.addImageBtn.click();
        createGallery.deleteGalleryUrlBtn.click()
    });
    it("create gallery", () => {
        createGallery.createGalleryLink.click();
        createGallery.createGalleryHeading
          .should("be.visible")
          .and("have.text", "Create Gallery");
          createGallery.createGallery(
          galleryData.title,
          galleryData.description,
          galleryData.imageUrl
        );
    });
    it("cancel button functionality", () => {
        createGallery.createGalleryLink.click();
        createGallery.cancelBtn.click();
        cy.url().should("include","/")
    });
})