import { boolean, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable('users', {
	id: serial('id').primaryKey(),
	username: text('username').notNull(),
	password: text('password').notNull(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	isAdmin: boolean('is_admin').notNull(),
	email: text('email').notNull().unique()
});

export const session = pgTable('sessions', {
	id: serial('id').primaryKey(),
	userId: integer('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', {
		withTimezone: true,
		mode: 'date'
	}).notNull()
});

export const product = pgTable('products' , {
	id : serial('id').primaryKey(),
	name: text('name').notNull(),
	desc : text('desc').notNull()
})