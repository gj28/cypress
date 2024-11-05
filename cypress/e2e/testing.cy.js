describe("link", () => {
    beforeEach(() => {
        cy.visit("https://filiphric.com/testing-links-with-cypress")
    })
    it('link', () => {
        cy.contains('Blog').click()
        cy.url().should('eq','https://filiphric.com/blog')
        cy.go('back')
    })
    it('link', () => {
        cy.contains('Workshops').click()
        cy.url().should('eq','https://filiphric.com/workshops')
        cy.go('back')
    })
    it('link', () => {
        cy.contains('Courses').click()
        cy.url().should('eq','https://filiphric.com/courses')
        cy.go('back')
    })
    it('verifies Community link URL', () => {
        cy.contains('Community')
          .should('have.attr', 'href')
          .then((href) => {
              expect(href).to.equal('https://discord.com/invite/3MdvPfT');
              cy.request(href).its('status').should('eq', 200);
          });
    });
       
    // it('link', () => {
    //     cy.contains('Community').click()
    //     cy.wait(10000)
    //     cy.url().should('eq','https://discord.com/invite/3MdvPfT')
    //     cy.go('back')
    // })
    it('link', () => {
        cy.contains('About').click()
        cy.url().should('eq','https://filiphric.com/about')
        cy.go('back')
    })
})