/*
  Warnings:

  - The primary key for the `ChatGpt` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Place` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Trip` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `destination` on the `Trip` table. All the data in the column will be lost.
  - The `id` column on the `Trip` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Reviews` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `id` on the `ChatGpt` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Place` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ratings` on the `Place` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `userId` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ChatGpt" DROP CONSTRAINT "ChatGpt_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "ChatGpt_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Place" DROP CONSTRAINT "Place_pkey",
ADD COLUMN     "tripId" INTEGER,
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
DROP COLUMN "ratings",
ADD COLUMN     "ratings" DOUBLE PRECISION NOT NULL,
ADD CONSTRAINT "Place_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Trip" DROP CONSTRAINT "Trip_pkey",
DROP COLUMN "destination",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Trip_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Reviews";

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL,
    "userImage" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ratings" BOOLEAN NOT NULL,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "isActive" BOOLEAN,
    "placeId" INTEGER,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE SET NULL ON UPDATE CASCADE;
