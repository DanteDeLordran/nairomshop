import type { LayoutServerLoad } from './$types';
import type { user } from '$lib/server/db/schema';

type User = typeof user.$inferInsert;

export const load: LayoutServerLoad = async ({ cookies }) => {
    const userCookie = cookies.get('user');

    if (userCookie) {
        const user: User = JSON.parse(userCookie);
        return {
            user
        };
    } else {
        return {
            user: null
        };
    }
};