/*
  Warnings:

  - You are about to drop the column `closeTime` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `isOpen` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `openTime` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `ratings` on the `Place` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Place_name_location_idx";

-- AlterTable
ALTER TABLE "Place" DROP COLUMN "closeTime",
DROP COLUMN "isOpen",
DROP COLUMN "latitude",
DROP COLUMN "location",
DROP COLUMN "longitude",
DROP COLUMN "openTime",
DROP COLUMN "ratings";

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ratings" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "openTime" TIMESTAMP(3) NOT NULL,
    "closeTime" TIMESTAMP(3) NOT NULL,
    "isOpen" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "isActive" BOOLEAN DEFAULT false,
    "placeId" TEXT,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Location_name_idx" ON "Location"("name");

-- CreateIndex
CREATE INDEX "Place_name_idx" ON "Place"("name");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE SET NULL ON UPDATE CASCADE;
