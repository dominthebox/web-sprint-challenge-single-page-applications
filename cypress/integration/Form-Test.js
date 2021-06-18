describe('User App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name]')
    const dropdownInput = () => cy.get('select[name=size]')
    const radioBtnInput = () => cy.get('input[name=sauce]')
    const checkboxInput = () => cy.get('input[name=pepperoni]')
    const checkboxInput2 = () => cy.get('input[name=sausage]')
    const checkboxInput3 = () => cy.get('input[name=peppers]')
    const checkboxInput4 = () => cy.get('input[name=olives]')
    const checkboxInput5 = () => cy.get('input[name=shrooms]')
    const specialInput = () => cy.get('input[name=instructions]')
    const submitBtn = () => cy.get('button[id=order-button]')

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        dropdownInput().should('exist')
        radioBtnInput().should('exist')
    })

    describe('Filling in the text inputs', () => {
        describe('Text inputs', () => {
            it('can type in the inputs', () => {
                nameInput()
                    .should('have.value', '')
                    .type('Dom')
                    .should('have.value', 'Dom')
                specialInput()
                    .should('have.value', '')
                    .type('leave at door')
                    .should('have.value', 'leave at door')
            })
        })

        describe('Checkbox', () => {
            it('can put a check in multiple checkboxes', () => {
                checkboxInput()
                    .should('not.be.checked')
                    .check()
                    .should('be.checked')
                checkboxInput2()
                    .should('not.be.checked')
                    .check()
                    .should('be.checked')
                checkboxInput3()
                    .should('not.be.checked')
                    .check()
                    .should('be.checked')
                checkboxInput4()
                    .should('not.be.checked')
                    .check()
                    .should('be.checked')
                checkboxInput5()
                    .should('not.be.checked')
                    .check()
                    .should('be.checked')
            })
        })
    })

    describe('Submitting form data', () => {
        it('can submit form data', () => {
            nameInput().type('SubmitTest')
            dropdownInput().select('small')
            radioBtnInput().check('marinara')
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