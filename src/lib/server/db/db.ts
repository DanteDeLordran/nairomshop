import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from '$lib/server/db/schema'

export const queryClient = postgres("postgres://lordran_dev:lordran_dev@localhost:5432/nairomshop_db");
export const db = drizzle(queryClient , { schema });