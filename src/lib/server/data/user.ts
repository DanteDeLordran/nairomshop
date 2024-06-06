import { eq } from "drizzle-orm";
import { db } from "../db/db";
import type { user } from "../db/schema";
type User = typeof user.$inferInsert

export const getUser = async(email : string , password : string) : Promise<User> => {
    return await db.query.user.findFirst({
        where: (users, { and }) => and(
          eq(users.email, email),
          eq(users.password, password)
        )
    })as User
}