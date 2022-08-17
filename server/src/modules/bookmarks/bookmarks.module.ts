import { Module } from "@nestjs/common";
import { BookmarksService } from "./bookmarks.service";
import { BookmarksController } from "./bookmarks.controller";
import { PrismaService } from "src/database/prisma/prisma.service";

@Module({
  controllers: [BookmarksController],
  providers: [BookmarksService, PrismaService],
})
export class BookmarksModule {}
