import { boolean, decimal, integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const user = pgTable('users', {
	id: serial('id').primaryKey(),
	username: text('username').notNull(),
	password: text('password').notNull(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	isAdmin: boolean('is_admin').default(false),
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

export const category = pgTable('categories', {
	id: serial('id').primaryKey(),
	name: varchar('name', { 
		length: 256 
	}).notNull().unique(),
});

export const product = pgTable('products', {
	id: serial('id').primaryKey(),
	name: varchar('name', { 
		length: 256 
	}).notNull().unique(),
	description: varchar('description', { 
		length: 512 
	}).notNull(),
	price: decimal('price').notNull(),
	categoryId: integer('category_id').references(() => category.id),
});

export const order = pgTable('orders', {
	id: serial('id').primaryKey(),
	productId: integer('product_id').references(() => product.id),
	quantity: integer('quantity').notNull(),
	totalPrice: decimal('total_price').notNull()
});