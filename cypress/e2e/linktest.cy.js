describe("backup", () => {
    it("Url checking", () => {
      cy.visit("https://filiphric.com/testing-links-with-cypress");
      cy.contains("blog").click()
      cy.go('back')
    });
  });
  