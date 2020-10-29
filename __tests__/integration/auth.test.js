const request = require('supertest');
const app = require('../../src/app');
const UsersModel = require('../../src/app/models/UsersModel');
const AuthUtils = require('../../src/app/controllers/Authentication/AuthUtils').AuthUtils;

describe('Auth', () => {

    beforeEach(async () => {
        
    })

    //------LOGIN TESTS-------//

    it('should return status 401 error case use wrong credentials', async () => {

        const response = await request(app).post('/api/v1/auth/login').send({
            email: 'error@bennu.com',
            password: '123123'
        });

        expect(response.status).toBe(401);
    });
    
    it('should return status 200 case use correct credentials', async () => {

        const response = await request(app).post('/api/v1/auth/login').send({
            email: 'glauber@bennu.com',
            password: '123321'
        });

        expect(response.status).toBe(200);
    });

    it('should return token in body response', async () => {

        const response = await request(app).post('/api/v1/auth/login').send({
            email: 'glauber@bennu.com',
            password: '123321'
        });

        expect(response.body).toHaveProperty('token');
    });

    //------LOGOUT TESTS-------//

    it('should return status 401 case dont have auth token', async () => {

        const response = await request(app).get('/api/v1/auth/logout');
        
        expect(response.status).toBe(401);
    });

    it('should return status 401 case token is invalid ', async () => {

        const response = await request(app).get('/api/v1/auth/logout')
        .set('Authorization', 'Bearer 123123');
        
        expect(response.status).toBe(401);
    });

    it('should return status 200 case token is valid', async () => {

        let user = await UsersModel.getUserByEmail('glauber@bennu.com');
        let token = AuthUtils.geenerateToken(user.dataUser.userID);


        const response = await request(app).get('/api/v1/auth/logout')
        .set('Authorization', `Bearer ${token}`);
        
        expect(response.status).toBe(200);
    });

    it('should return status 401 case logout ', async () => {

        let user = await UsersModel.getUserByEmail('glauber@bennu.com');
        let token = AuthUtils.geenerateToken(user.dataUser.userID);


        const response = await request(app).get('/api/v1/auth/logout')
        .set('Authorization', `Bearer ${token}`);

        const response2 = await request(app).get('/api/v1/auth/logout')
        .set('Authorization', `Bearer ${token}`);
        
        expect(response2.status).toBe(401);
    });

});
