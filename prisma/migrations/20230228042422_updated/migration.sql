/*
  Warnings:

  - The `preferences` column on the `Trip` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "preferences",
ADD COLUMN     "preferences" TEXT[];

-- CreateIndex
CREATE INDEX "Trip_preferences_idx" ON "Trip"("preferences");
