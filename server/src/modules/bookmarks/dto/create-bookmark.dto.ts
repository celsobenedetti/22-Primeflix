import { IsPositive } from "class-validator";

export class CreateBookmarkDto {
  @IsPositive()
  id_tmdb: number;
}
