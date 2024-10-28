-- CreateTable
CREATE TABLE "Zoo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "habitat" TEXT NOT NULL,
    "food" TEXT NOT NULL,
    "zone" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Zoo_pkey" PRIMARY KEY ("id")
);
