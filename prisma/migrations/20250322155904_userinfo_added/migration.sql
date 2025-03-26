-- CreateTable
CREATE TABLE "UserInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phoneNumber" TEXT NOT NULL,
    "dateBirth" DATETIME NOT NULL,
    "cpf" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "UserInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserCreds" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_phoneNumber_key" ON "UserInfo"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_cpf_key" ON "UserInfo"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_userId_key" ON "UserInfo"("userId");
