import { db } from '$lib/server/db/db';
import type { PageServerLoad } from './$types';

export const load : PageServerLoad = async() => {
    const products = await db.query.product.findMany()

    return {
        products
    }
}