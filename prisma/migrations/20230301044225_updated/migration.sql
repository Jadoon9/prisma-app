/*
  Warnings:

  - You are about to drop the `Chatgpt` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Chatgpt";

-- CreateTable
CREATE TABLE "Preferences" (
    "id" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "isActive" BOOLEAN DEFAULT false,

    CONSTRAINT "Preferences_pkey" PRIMARY KEY ("id")
);
