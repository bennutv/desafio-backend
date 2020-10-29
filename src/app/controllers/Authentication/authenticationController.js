const SuccessCode = require('../../../utils/SuccessCode');
const Messages = require('../../../utils/Messages');
const AuthUtils = require('./AuthUtils');


class AuthenticationController {

    async onLogin(req, res) {
        let {email, password} = req.body;

        if(!AuthUtils.emailIsValid(email).error && !AuthUtils.passwordIsValid(password).error) {
            let dataCheck = await AuthUtils.checkCredentials(email, password);
            let credentialsIsCorrect = !dataCheck.error && dataCheck.code === SuccessCode.userAuthorized;

            if(credentialsIsCorrect) {
                res.status(200).json({
                    error: false, 
                    message: Messages.userAuthorized,
                    token: AuthUtils.geenerateToken(dataCheck.dataUser.userID)
                });
            }else {
                res.status(401).json({error: true, message: Messages.incorrectEmailPass});
            }
        }else {
            res.status(401).json({error: true, message: Messages.incorrectEmailPass});
        }
        
    }

    onLogout(req, res) {
        res.status(200).json({message: 'success'})
    }
}

module.exports = new AuthenticationController();