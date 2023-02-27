-- AlterTable
ALTER TABLE "ChatGpt" ALTER COLUMN "isActive" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Friend" ALTER COLUMN "isActive" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Place" ALTER COLUMN "isOpen" SET DEFAULT false,
ALTER COLUMN "isActive" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "ratings" SET DEFAULT false,
ALTER COLUMN "isActive" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Trip" ALTER COLUMN "isActive" SET DEFAULT false;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isActive" SET DEFAULT false;
