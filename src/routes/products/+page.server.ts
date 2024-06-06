import { db } from '$lib/server/db/db';
import type { user } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';
type User = typeof user.$inferInsert;

export const load : PageServerLoad = async({cookies}) => {
    const products = await db.query.product.findMany()
    const userCookie = cookies.get('user');

    if (userCookie) {
        const user: User = JSON.parse(userCookie);
        return {
            user,
            products
        };
    } else {
        return {
            user: null,
            products : []
        };
    }
}