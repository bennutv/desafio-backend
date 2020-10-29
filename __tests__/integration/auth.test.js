const request = require('supertest');
const app = require('../../src/app');

describe('Auth', () => {

    beforeEach(async () => {
        
    })

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

});
