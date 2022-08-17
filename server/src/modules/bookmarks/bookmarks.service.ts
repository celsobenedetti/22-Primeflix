import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { JwtPayload } from "src/auth/interfaces/jwt-payload.interface";

import { PrismaService } from "src/database/prisma/prisma.service";
import { CreateBookmarkDto } from "./dto/create-bookmark.dto";
import { UpdateBookmarkDto } from "./dto/update-bookmark.dto";

@Injectable()
export class BookmarksService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: JwtPayload, createBookmarkDto: CreateBookmarkDto) {
    const { id_tmdb } = createBookmarkDto;

    const existingBookmark = await this.prismaService.movie.findUnique({
      where: { id_tmdb_user_id: { id_tmdb, user_id: user.id } },
    });

    if (existingBookmark) throw new ConflictException("You already bookmarked this movie");

    return this.prismaService.movie.create({
      data: { user_id: user.id, id_tmdb: createBookmarkDto.id_tmdb },
    });
  }

  findAll(user: JwtPayload) {
    return this.prismaService.user.findUnique({
      where: { id: user.id },
      select: { bookmarks: true },
    });
  }

  async findOne(id: number) {
    const bookmark = await this.prismaService.movie.findUnique({ where: { id } });
    if (!bookmark) throw new NotFoundException("Bookmark not found");
    return bookmark;
  }

  update(id: number, updateBookmarkDto: UpdateBookmarkDto) {
    return `This action updates a #${id} bookmark`;
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prismaService.movie.delete({ where: { id } });
  }
}
