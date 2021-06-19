describe('User App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name')
    const dropdownInput = () => cy.get('input[name=size]')
    const radioBtnInput = () => cy.get('input[name=sauce]')
    const checkboxInput = () => cy.get('input[name=pepperoni]')
    const checkboxInput = () => cy.get('input[name=sausage]')
    const checkboxInput = () => cy.get('input[name=peppers]')
    const checkboxInput = () => cy.get('input[name=olives]')
    const checkboxInput = () => cy.get('input[name=shrooms]')
    const submitBtn = () => cy.get('button[id=order-button]')

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        dropdownInput().should('exist')
        radioBtnInput().should('exist')
    })

    describe('Filling in the inputs', () => {
        describe('Text inputs', () => {
            it('can type in the inputs', () => {
                nameInput()
                    .should('have.value', '')
                    .type('Dom')
                    .should('have.value', 'Dom')
                dropdownInput()
                    .should('have.value', '')
                radioBtnInput()
                    .should('have.value', '')
            })
        })

        describe('Checkbox', () => {
            it('can put a check in the checkbox', () => {
                checkboxInput()
                    .should('not.be.checked')
                    .check()
                    .should('be.checked')
            })
        })
    })

    describe('Submitting form data', () => {
        it('can submit form data', () => {
            nameInput().type('Button test')
            dropdownInput().type('button@test.com')
            radioBtnInput().type('secretButton')
            checkboxInput().check()
            submitBtn().click()
        })
    })

    describe('Checking form validation', () => {
        it('can check if an input is left empty', () => {
            submitBtn().should('be.disabled')
        })
    })

})