const request = require('supertest');
const app = require('../../src/app');
const UserModel = require('../../src/app/models/UsersModel');
const { AuthUtils } = require('../../src/app/controllers/Authentication/AuthUtils');

describe('NEWS - TESTS IMPLEMENTATION NEWS API', () => {

    //------NEWS TESTS-------//

    it('should return status 401 case access without token header /api/v1/news/get-all', async () => {

        const response = await request(app).get('/api/v1/news/get-all');

        expect(response.status).toBe(401);
    });

    it('should return status 401 case access without token header /api/v1/news/get-news', async () => {

        const response = await request(app).get('/api/v1/news/get-news');

        expect(response.status).toBe(401);
    });

    it('should return status 401 case access with invalid token header /api/v1/news/get-all', async () => {

        const response = await request(app).get('/api/v1/news/get-all')
        .set('Authorization', `Bearer 123456`);

        expect(response.status).toBe(401);
    });

    it('should return status 401 case access with invalid token header /api/v1/news/get-news', async () => {

        const response = await request(app).get('/api/v1/news/get-news')
        .set('Authorization', `Bearer 123456`);

        expect(response.status).toBe(401);
    });

    it('should return status 200 case access with valid token header /api/v1/news/get-all', async () => {

        let user = await UserModel.getUserByEmail('glauber@bennu.com');
        let token = AuthUtils.geenerateToken(user.dataUser.userID);

        const response = await request(app).get('/api/v1/news/get-all')
        .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
    });

    it('should return status 200 case access with valid token header /api/v1/news/get-news', async () => {

        let user = await UserModel.getUserByEmail('glauber@bennu.com');
        let token = AuthUtils.geenerateToken(user.dataUser.userID);

        const response = await request(app).get('/api/v1/news/get-news?id=782973')
        .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
    });

    it('should return status allNews property in body request /api/v1/news/get-all', async () => {

        let user = await UserModel.getUserByEmail('glauber@bennu.com');
        let token = AuthUtils.geenerateToken(user.dataUser.userID);

        const response = await request(app).get('/api/v1/news/get-all')
        .set('Authorization', `Bearer ${token}`);

        expect(response.body).toHaveProperty('allNews');
    });

    it('should return status allNews property in body request /api/v1/news/get-news', async () => {

        let user = await UserModel.getUserByEmail('glauber@bennu.com');
        let token = AuthUtils.geenerateToken(user.dataUser.userID);

        const response = await request(app).get('/api/v1/news/get-news?id=782973')
        .set('Authorization', `Bearer ${token}`);

        expect(response.body).toHaveProperty('news');
    });

    it('should not allow access private urls after logout with token', async () => {

        const response = await request(app).post('/api/v1/auth/login')
        .send({
            email: 'glauber@bennu.com',
            password: '123321'
        })

        let token = response.body.token;

        await request(app).get('/api/v1/auth/logout')
        .set('Authorization', `Bearer ${token}`);


        const response3 = await request(app).get('/api/v1/news/get-news?id=782973')
        .set('Authorization', `Bearer ${token}`);

        expect(response3.status).toBe(401);
    });
})