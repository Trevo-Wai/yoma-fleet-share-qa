/// <reference types="cypress" />


// TEST DATA
const testUser = {
    valid: {
      fullName: 'Kaung Wai',
      email: 'skrillexfan369@gmail.com',
      password: 'P@ssw0rd123',
      confirmPassword: 'P@ssw0rd123'
    },
    invalid: {
      email: 'kaung222gmail.com',
      mismatchedPassword: '123456789'
    }
  };
  
  
  // UTILITY FUNCTIONS
  const registerUser = (
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    cy.get('#fullName').type(fullName);
    cy.get('input[type="email"][name="username"]').type(email);
    cy.get('#password').type(password);
    cy.get('#confirmPassword').type(confirmPassword);
    cy.get('button[type="submit"]').should('contain', 'SUBMIT').click();
    cy.wait (8000); // Wait for 8 seconds 
  };
  
  
  // TEST CASES
  describe('User Registration', () => {
    beforeEach(() => {
      cy.visit('https://carshare.yomafleet.com/account/register');
    });
  
    // Positive Test
    it('Registers successfully with valid data', () => {
      registerUser(
        testUser.valid.fullName,
        testUser.valid.email,
        testUser.valid.password,
        testUser.valid.confirmPassword
      );
      //cy.url().should('include', '/login');
    });
  
    // Negative Tests
    it('Shows error for invalid email', () => {
      registerUser(
        testUser.valid.fullName,
        testUser.invalid.email,
        testUser.valid.password,
        testUser.valid.confirmPassword
      );
      cy.contains('label', "Please enter valid email address.");
    
    });
  
    it('Rejects mismatched passwords', () => {
      registerUser(
        testUser.valid.fullName,
        testUser.valid.email,
        testUser.valid.password,
        testUser.invalid.mismatchedPassword
      );
      cy.contains('label', "The password doesn't match.");
    
    });
  });