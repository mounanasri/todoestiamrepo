/*
  Warnings:

  - The primary key for the `Todo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `date` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statut` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titre` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "updatedAt",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "statut" TEXT NOT NULL,
ADD COLUMN     "titre" TEXT NOT NULL,
ADD COLUMN     "todo_id" SERIAL NOT NULL,
ADD CONSTRAINT "Todo_pkey" PRIMARY KEY ("todo_id");
