import { Controller, Get, Post, Body, Patch, Param, Delete, Req, HttpCode } from "@nestjs/common";
import { SignedUserReq } from "src/common/interfaces";
import { BookmarksService } from "./bookmarks.service";
import { CreateBookmarkDto } from "./dto/create-bookmark.dto";
import { UpdateBookmarkDto } from "./dto/update-bookmark.dto";

@Controller("bookmarks")
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  create(@Req() { user }: SignedUserReq, @Body() createBookmarkDto: CreateBookmarkDto) {
    return this.bookmarksService.create(user, createBookmarkDto);
  }

  @Get()
  findAll(@Req() { user }: SignedUserReq) {
    return this.bookmarksService.findAll(user);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookmarksService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBookmarkDto: UpdateBookmarkDto) {
    return this.bookmarksService.update(+id, updateBookmarkDto);
  }

  @Delete(":id")
  @HttpCode(204)
  remove(@Param("id") id: string) {
    return this.bookmarksService.remove(+id);
  }
}
