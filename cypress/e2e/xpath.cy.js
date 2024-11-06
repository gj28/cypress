require("cypress-xpath");

describe('template', () => {

    it('X-path testing', () => {
        cy.visit('https://www.google.com');

        cy.xpath("//a[normalize-space()='Images']").click();
    });
});
