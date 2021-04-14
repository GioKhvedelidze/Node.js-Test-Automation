const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    it('should logout and verify logout alert message', () => {
        SecurePage.btnLogout.click(); //Clicking the button
        
        expect(SecurePage.flashAlert).toHaveTextContaining("You logged out of the secure area!"); // checking text is available
    });
});


