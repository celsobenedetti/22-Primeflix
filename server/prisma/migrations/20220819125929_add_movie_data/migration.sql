/*
  Warnings:

  - Added the required column `posterPath` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releaseDate` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voteAverage` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "genreIds" INTEGER[],
ADD COLUMN     "posterPath" TEXT NOT NULL,
ADD COLUMN     "releaseDate" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "voteAverage" DOUBLE PRECISION NOT NULL;
