const ErrorsCode = require('../../utils/ErrorsCode');

class UsersModel {

    constructor() {
        this.users = [
            {
                userID: '1',
                email: 'glauber@gmail.com',
                password: '123456'
            },
            {
                userID: '2',
                email: 'glauber@bennu.com',
                password: '123321'
            },
            {
                userID: '3',
                email: 'arthur@gmail.com',
                password: '123456'
            }
        ]
    }

    async getAllUsers() {
        return this.users;
    }

    async getUserByEmail(_email) {
        let indexUser = this.users.findIndex(e => e.email == _email);

        if(indexUser > -1) {
            return {error: false, dataUser: this.users[indexUser]}
        }else {
            return {error: true, message: 'user not found', code: ErrorsCode.userNotFound}
        }
    }

    async getUserByUserID(_userID) {
        let indexUser = this.users.findIndex(e => e.userID = _userID);

        if(indexUser > -1) {
            return {error: false, dataUser: this.users[indexUser]}
        }else {
            return {error: true, message: 'user not found', code: ErrorsCode.userNotFound}
        }
    }
}

module.exports = new UsersModel();