ALTER TABLE "post" ALTER COLUMN "image_url" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "post" ADD COLUMN "total_views" integer DEFAULT 0;