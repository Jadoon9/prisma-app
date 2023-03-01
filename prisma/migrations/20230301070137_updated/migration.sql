/*
  Warnings:

  - You are about to drop the column `profileId` on the `Friend` table. All the data in the column will be lost.
  - You are about to drop the column `travelerId` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `placeId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `travelerId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `travelerId` on the `Trip` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Friend" DROP CONSTRAINT "Friend_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Place" DROP CONSTRAINT "Place_travelerId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_placeId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_travelerId_fkey";

-- DropForeignKey
ALTER TABLE "Trip" DROP CONSTRAINT "Trip_travelerId_fkey";

-- AlterTable
ALTER TABLE "Friend" DROP COLUMN "profileId",
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Place" DROP COLUMN "travelerId",
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "placeId",
DROP COLUMN "travelerId",
ADD COLUMN     "locationId" TEXT,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "travelerId",
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
