const SuccessCode = require('../../../utils/SuccessCode');
const Messages = require('../../../utils/Messages');
const { AuthUtils } = require('./AuthUtils');
const fs = require('fs');



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
                    token: await AuthUtils.geenerateToken(dataCheck.dataUser.userID)
                });
            }else {
                res.status(401).json({error: true, message: Messages.incorrectEmailPass});
            }
        }else {
            res.status(401).json({error: true, message: Messages.incorrectEmailPass});
        }
        
    }

    async onLogout(req, res) {
        let { token, userID } = req;
        let _validTokens = await AuthUtils.loadListValidToken();
        let index = _validTokens.findIndex(e => e.userID === userID && e.token === token);
        if(index > -1) {
            _validTokens.splice(index, 1);
            await fs.promises.writeFile(process.env.listValidTokenPath, JSON.stringify(_validTokens), 'utf-8')   
            res.status(200).json({error: false, message: Messages.userLogout})
        }else {
            res.status(200).json({error: false, message: Messages.userAlreadylogout})
        }
        
    }
}

module.exports = new AuthenticationController();