describe("assertion", () => {
    it("tests", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should("include", "orangehrmlive.com")
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url().should("contain", "orangehrm")
    })
})

describe("assertion", () => {
    it("tests", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should("include", "orangehrmlive.com")

            .should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            .should("contain", "orangehrm")
    })
})

describe("assertion", () => {
    it("tests", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should("include", "orangehrmlive.com")

            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            .and("contain", "orangehrm")
            .and("not.contain", "orangehrm1")
            .and("not.include", "orangehrmlive1.com")
            .and("not.eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
})

describe("assertion", () => {
    it("tests", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should("include", "orangehrmlive.com")

            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            .and("contain", "orangehrm")
            .and("not.contain", "orangehrm1")
            .and("not.include", "orangehrmlive1.com")
            .and("not.eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
})
describe("assertion", () => {
    it("tests", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should("include", "orangehrmlive.com")

            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            .and("contain", "orangehrm")
            .and("not.contain", "orangehrm1")
            .and("not.include", "orangehrmlive1.com")
            .and("not.eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
})

describe("assertion", () => {
    it("tests", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("include", "Orange")

            .and("eq", "OrangeHRM")
            .and("contain", "HRM")
    })
})


