describe('Member App', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000/')
    })

    const textInput = () => cy.get();
    const passwordInput = () => cy.get();
    const emailInput = () => cy.get();
    const submitBtn = () => cy.get();
    const tos = () => cy.get();

    it('sanity check to make sure tests work', () => {
        expect(2 + 2).to.equal(4);
        expect(2 + 7).not.to.equal(5); // Strict equality ===
        expect({}).not.to.equal({}); // Strict equality {} !== {}

      })

})