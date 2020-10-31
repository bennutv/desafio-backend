const ErrorsCode = require('../../../utils/ErrorsCode');
const SuccessCode = require('../../../utils/SuccessCode');
const UsersModel = require('../../models/UsersModel');
const jwt = require('jsonwebtoken');
const Messages = require('../../../utils/Messages');
const fs = require('fs');
require('dotenv').config({
    path: '.env'
});


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
        if(response.error) {
            return {error: true, code: response.code};
        }else {
            if(response.dataUser.password === password) {
                return {error: false, code: SuccessCode.userAuthorized, dataUser: response.dataUser};
            }else {
                return {error: true, code: ErrorsCode.invalidPassword};
            }
        }
    }
    async geenerateToken (id) {
        let timestamp = new Date().getTime();
        let token =  jwt.sign({userID: id, timestamp: timestamp}, process.env.APP_SECRET, {expiresIn: 86400000});
        let listValidTokenJSON = [];
        listValidTokenJSON = require('../../../../validTokens.json');
        listValidTokenJSON.push({userID: id, token: token, timestamp: timestamp});
        await fs.promises.writeFile(process.env.listValidTokenPath, JSON.stringify(listValidTokenJSON), 'utf-8')
        return token;
    }

    async loadListValidToken() {
        try {
            let listValidTokenJSON = [];
            listValidTokenJSON = require('../../../../validTokens.json');
            return listValidTokenJSON;
        } catch (err) {
            return [];
        }
    }
}

let AuthUtils = new _AuthUtils();

module.exports = {
    AuthUtils
};