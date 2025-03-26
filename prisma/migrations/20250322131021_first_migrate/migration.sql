-- CreateTable
CREATE TABLE "UserCreds" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isFullRegister" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCreds_email_key" ON "UserCreds"("email");
