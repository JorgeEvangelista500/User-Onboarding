describe('Member App', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=first_name]');
    const passwordInput = () => cy.get('input[name=password]');
    const emailInput = () => cy.get('input[name=email]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');
    const tos = () => cy.get('[type="checkbox"]')

    it('sanity check!', () => {
        expect(2 + 2).to.equal(4);
        expect(2 + 7).not.to.equal(5); // Strict equality ===
        expect({}).not.to.equal({}); // Strict equality {} !== {}

      })

    it('elements are showing', () => {
        nameInput().should('exist');
        passwordInput().should('exist');
        emailInput().should('exist');
        submitBtn().should('exist');
        tos().should('exist');
    })

    describe('Filling out the inputs', () => {

        it('submit button starts out disabled',() => {
            submitBtn().should('be.disabled')

        })
            
        it('can type the inputs', () => {
           nameInput()
           .should('have.value','')
           .type('Jorge')
           .should('have.value','Jorge')

           emailInput()
           .should('have.value', '')
           .type('jorge@evan.com')
           .should('have.value','jorge@evan.com')

           passwordInput()
           .should('have.value', '')
           .type('wasd')
           .should('have.value','wasd')
        })

        it('the Terms of service checkbox works',() => {
            tos().check()
            tos().should('be.checked')
        })

        it('the submit button enables when all fields are filled', () => {
            nameInput().type('Elvis')
            emailInput().type('elvis@evan.com')
            passwordInput().type('dsaw')
            tos().check()
            submitBtn().should('not.be.disabled')
        })
    })

    describe('Adding a new member', () => {
        it('can submit a new member', () => {
            nameInput().type('Gustavo')
            emailInput().type('gustavo@evan.com')
            passwordInput().type('abc')
            tos().check()
            submitBtn().click()
            cy.contains('Gustavo').should('exist')
            // cy.contains('Gustavo').next().click()
            // cy.contains('Gustavo').should('not.exist') dont have a delete button
        })
    })

})