/*
  Warnings:

  - You are about to drop the column `userImage` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Trip` table. All the data in the column will be lost.
  - Added the required column `reviewerImage` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travelerId` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Trip" DROP CONSTRAINT "Trip_userId_fkey";

-- AlterTable
ALTER TABLE "Place" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "userImage",
ADD COLUMN     "reviewerImage" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "userId",
ADD COLUMN     "travelerId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Friend_name_idx" ON "Friend"("name");

-- CreateIndex
CREATE INDEX "Place_name_location_idx" ON "Place"("name", "location");

-- CreateIndex
CREATE INDEX "Review_name_idx" ON "Review"("name");

-- CreateIndex
CREATE INDEX "Trip_preferences_idx" ON "Trip"("preferences");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_travelerId_fkey" FOREIGN KEY ("travelerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
