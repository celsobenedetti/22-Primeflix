/*
  Warnings:

  - A unique constraint covering the columns `[id_tmdb,user_id]` on the table `movies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_tmdb` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "id_tmdb" INTEGER NOT NULL,
ADD COLUMN     "watched" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "movies_id_tmdb_user_id_key" ON "movies"("id_tmdb", "user_id");
