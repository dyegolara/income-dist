-- CreateTable
CREATE TABLE "Spend" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "amount" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "note" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);
