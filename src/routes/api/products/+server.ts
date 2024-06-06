import { db } from "$lib/server/db/db";
import { product } from "$lib/server/db/schema";
import type { RequestHandler } from "@sveltejs/kit";
type Product = typeof product.$inferInsert

export const GET = () => {
    return new Response(JSON.stringify({message: "Good"}),{status: 200});
}

export const POST: RequestHandler = async ({request}) => {
    const newproduct : Product = await request.json()
    db.insert(product).values(newproduct)
    return new Response(JSON.stringify({message: "Good"}),{status: 201});
};