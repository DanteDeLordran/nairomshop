import { db } from '$lib/server/db/db';
import type { PageServerLoad } from './$types';

export const load : PageServerLoad = async({params}) => {

    const product = await db.query.product.findFirst({
        where: (product, { eq }) => eq(product.id, Number(params.id)),
    });

    return {
        product
    }
}