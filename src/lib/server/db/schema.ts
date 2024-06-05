import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable('user', {
	id: serial('id').primaryKey(),
	username: text('username').notNull(),
	password: text('password').notNull(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull()
});

export const sessionTable = pgTable('session', {
	id: serial('id').primaryKey(),
	userId: integer('user_id')
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp('expires_at', {
		withTimezone: true,
		mode: 'date'
	}).notNull()
});