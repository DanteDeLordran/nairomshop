import { db } from '$lib/server/db/db';
import { order } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';
type Order = typeof order.$inferInsert

export const actions = {

    default: async(e) => {
        const body = await e.request.json() as Order[]
        await db.insert(order).values(body)
    }

}