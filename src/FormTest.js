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

    
}