ALTER TABLE "users" ALTER COLUMN "is_admin" SET DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "is_admin" DROP NOT NULL;