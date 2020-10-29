const AuthUtils = require('../../src/app/controllers/Authentication/AuthUtils');

describe('AuthUtils - Complementary functions of AuthenticationController', () => {

    it('should return error=true case invalid email', async () => {

        let result = AuthUtils.emailIsValid('gllaslkkaslk.com');

        expect(result.error).toBe(true);
    });
    
    it('should return error=true case password.length < 6', async () => {

        let result = AuthUtils.passwordIsValid('asdf');

        expect(result.error).toBe(true);
    });

    it('should return error=false case email is valid', async () => {

        let result = AuthUtils.emailIsValid('glauber@gma.com');

        expect(result.error).toBe(false);
    });

    it('should return error=false case password.length >= 6', async () => {

        let result = AuthUtils.passwordIsValid('1234565');

        expect(result.error).toBe(false);
    });

    
    it('should return error=true case email are incorrect', async () => {

        let result = await AuthUtils.checkCredentials('glauber@bennu.com.br', '123321');

        expect(result.error).toBe(true);
    });

    it('should return error=true case password are incorrect', async () => {

        let result = await AuthUtils.checkCredentials('glauber@bennu.com', '123322');

        expect(result.error).toBe(true);
    });

    it('should return error=false case email and password are corrects', async () => {

        let result = await AuthUtils.checkCredentials('glauber@bennu.com', '123321');

        expect(result.error).toBe(false);
    });

});