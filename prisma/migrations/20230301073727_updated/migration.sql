/*
  Warnings:

  - You are about to drop the column `name` on the `Review` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Review_name_idx";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "name",
ALTER COLUMN "reviewerImage" DROP NOT NULL,
ALTER COLUMN "comment" DROP NOT NULL;
