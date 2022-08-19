import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Req, Res } from "@nestjs/common";
import { Response } from "express";
import { SignedUserReq } from "src/common/interfaces";
import { BookmarksService } from "./bookmarks.service";
import { CreateBookmarkDto } from "./dto/create-bookmark.dto";
import { UpdateBookmarkDto } from "./dto/update-bookmark.dto";

@Controller("bookmarks")
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post("toggle")
  async toggle(
    @Req() { user }: SignedUserReq,
    @Res() res: Response,
    @Body() createBookmarkDto: CreateBookmarkDto,
  ) {
    const newBookmark = await this.bookmarksService.toggle(user, createBookmarkDto);

    if (newBookmark) res.status(HttpStatus.CREATED).send(newBookmark);
    else res.sendStatus(HttpStatus.NO_CONTENT);
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
}
