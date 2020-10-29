const request = require('supertest');
const app = require('../../src/app');

describe('Auth', () => {

    beforeEach(async () => {
        
    })

    it('should return 401 error case use wrong credentials', async () => {

        const response = await request(app).post('/api/v1/auth/login').send({
            email: 'error@bennu.com',
            password: '123123'
        });

        expect(response.status).toBe(401);
    }) 
});
