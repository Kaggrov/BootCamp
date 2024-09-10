describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
  it('passes', () => { 
    cy.visit('http://localhost:4200/')
  })

  // it('check Button', () => { //first visit localhost , then check webpage as it;s end to end testing ; Thus cypress runs sequentially
  //   cy.visit('http://localhost:4200/')
  //   cy.get('#inc').should('contain','Increase')
  // })

  it('check Home', () => { //first visit localhost , then check webpage as it;s end to end testing ; Thus cypress runs sequentially
    cy.visit('http://localhost:4200/')
    cy.get('#navbarSupportedContent').contains('Home').should('be.visible');
  })

  it('should display an error for empty password', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('[formControlName=email]').type('test@example.com');

    cy.get('[formControlName=pass]').click();
    cy.get('[formControlName=email]').click();

    cy.contains('Password is required.').should('be.visible');
  });

  it('should submit the form with valid email and password', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('[formControlName=email]').type('test@example.com');

    cy.get('[formControlName=pass]').type('password123');

    cy.get('form').submit();

  });
})