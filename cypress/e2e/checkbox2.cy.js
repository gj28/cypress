describe("checkbox", () => {
  it("tests checkbox", () => {
    cy.visit("https://demoqa.com/checkbox");
    cy.get("ol button > svg").click();
    cy.get("li > ol > li:nth-of-type(1) button > svg").click();
    cy.get("li > ol > li.rct-node-expanded > ol > li:nth-of-type(1) span.rct-checkbox > svg").click();
    cy.get("li:nth-of-type(2) button > svg").click();
    cy.get("li:nth-of-type(2) > ol > li:nth-of-type(2) span.rct-checkbox > svg").click();
  });
});
