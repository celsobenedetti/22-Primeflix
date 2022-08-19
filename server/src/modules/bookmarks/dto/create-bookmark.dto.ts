import { IsArray, IsNotEmpty, IsPositive } from "class-validator";

export class CreateBookmarkDto {
  @IsPositive()
  id_tmdb: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  releaseDate: string;

  @IsNotEmpty()
  posterPath: string;

  @IsArray()
  genreIds: number[];

  @IsPositive()
  voteAverage: number;
}
