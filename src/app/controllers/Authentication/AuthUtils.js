const ErrorsCode = require('../../../utils/ErrorsCode');
const SuccessCode = require('../../../utils/SuccessCode');
const UsersModel = require('../../models/UsersModel');
const jwt = require('jsonwebtoken');
const Messages = require('../../../utils/Messages');

let validTokens = [];

class _AuthUtils {
    emailIsValid(email) {
        let er = /^[a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}$/;

        if(!er.exec(email)) {
            return {error: true, code: ErrorsCode.invalidEmail};
        }else {
            return {error: false, message: 'OK'};
        }
    }

    passwordIsValid(password) {
        return password.length >= 6 ? {error: false, message: 'OK'} : {error: true, code: ErrorsCode.invalidPassword};
    }

    async checkCredentials(email, password) {
        let response = await UsersModel.getUserByEmail(email);
        console.log("response ==> ", response)
        if(response.error) {
            return {error: true, code: response.code};
        }else {
            if(response.dataUser.password === password) {
                return {error: false, code: SuccessCode.userAuthorized, dataUser: response.dataUser.userID};
            }else {
                return {error: true, code: ErrorsCode.invalidPassword};
            }
        }
    }
    geenerateToken (id) {
        let token =  jwt.sign({userID: id}, process.env.APP_SECRET, {expiresIn: 86400000});
        validTokens.push({userID: id, token: token, timestamp: new Date().getTime()});
        return token;
    }
}

let AuthUtils = new _AuthUtils();

module.exports = {
    AuthUtils,
    validTokens
};