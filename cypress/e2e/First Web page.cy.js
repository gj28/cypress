describe("First Web page", () => {
  it("tests First Web page", () => {
    cy.viewport(510, 585);
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("form > div:nth-of-type(1) input").type("Admin");
    cy.get("form > div:nth-of-type(2) input").type("admin123");
    cy.get("button").click();
    cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    cy.get("div.oxd-topbar-header-title > i").click();
    cy.get("li:nth-of-type(3) > a").click();
    cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList");
    cy.get("header li:nth-of-type(4) > a").click();
    cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });
});
