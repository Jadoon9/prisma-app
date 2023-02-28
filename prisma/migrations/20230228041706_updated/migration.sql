/*
  Warnings:

  - You are about to drop the `ChatGpt` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ChatGpt";

-- CreateTable
CREATE TABLE "Preferences" (
    "id" TEXT NOT NULL,
    "choices" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "isActive" BOOLEAN DEFAULT false,

    CONSTRAINT "Preferences_pkey" PRIMARY KEY ("id")
);
