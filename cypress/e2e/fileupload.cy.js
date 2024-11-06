require("cypress-file-upload")

describe('Example to demonstrate file upload in cpress', function(){
    before(function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
    }
)

it('file upload',()=>{
    cy.get('input[type="file"]').attachFile('images.jpg')
    cy.get('#file-submit').click()
    cy.get('#uploaded-files').contains('images.jpg')
})
})