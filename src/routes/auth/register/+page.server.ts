// src/routes/register/+page.server.ts
import { db } from '$lib/server/db/db';
import { user } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');

        if (typeof username === 'string' && typeof password === 'string' && typeof firstName === 'string' && typeof lastName === 'string' && typeof email === 'string') {
            await db.insert(user).values({
                username,
                password,
                firstName,
                lastName,
                email,
            });
            throw redirect(303, '/auth/login');
        }

        return { success: true };
    }
};