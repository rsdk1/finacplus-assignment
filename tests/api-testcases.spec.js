import { test, expect } from '@playwright/test';
import { log } from '../utils/logger.js';
const fs = require('fs');



test.describe('API assignment: Reqres', () => {
    let userId;

    test('Create user', async ({ request }) => {
        const response = await request.post(process.env.API_BASE_URL + '/api/users', {
            headers: {
                'x-api-key': process.env.REQRES_API_KEY
            },
            data: {
                name: 'suma',
                job: 'QA Engineer'
            }
        });

        expect(response.status()).toBe(201);
        const body = await response.json();
        userId = body.id;

        
        expect(body.name).toBe('suma');
        expect(body.job).toBe('QA Engineer');

        log("User created");
    });

    test('Get user', async ({ request }) => {
        const response = await request.get(process.env.API_BASE_URL + `/api/users/${userId}`, {
            headers: {
                'x-api-key': process.env.REQRES_API_KEY
            }
        });

        expect(response.status()).toBe(200);
        log("User created");
    });

    test('Update user', async ({ request }) => {
        const response = await request.patch(process.env.API_BASE_URL + `/api/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${process.env.REQRES_API_KEY}`
            },
            data: {
                name: 'neo'
            }
        });

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.name).toBe('neo');

        log('User updated successfully:');
    });

});
