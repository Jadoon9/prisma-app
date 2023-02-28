/*
  Warnings:

  - You are about to drop the `Preferences` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Preferences";

-- CreateTable
CREATE TABLE "Chatgpt" (
    "id" TEXT NOT NULL,
    "choices" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "isActive" BOOLEAN DEFAULT false,

    CONSTRAINT "Chatgpt_pkey" PRIMARY KEY ("id")
);
