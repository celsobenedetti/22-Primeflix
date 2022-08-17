import { createMock } from "@golevelup/ts-jest";
import { Test, TestingModule } from "@nestjs/testing";
import { SignedUserReq } from "src/common/interfaces";
import { PrismaService } from "src/database/prisma/prisma.service";
import { BookmarksController } from "./bookmarks.controller";
import { BookmarksService } from "./bookmarks.service";

describe("BookmarksController", () => {
  let controller: BookmarksController;
  let bookmarkService: BookmarksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookmarksController],
      providers: [PrismaService, BookmarksService],
    }).compile();

    controller = module.get<BookmarksController>(BookmarksController);
    bookmarkService = module.get<BookmarksService>(BookmarksService);
  });

  describe("findAll", () => {
    it("should call signup service", async () => {
      const mockRequest = createMock<SignedUserReq>();
      jest.spyOn(bookmarkService, "findAll").mockImplementationOnce((): any => []);

      await controller.findAll(mockRequest);

      expect(bookmarkService.findAll).toBeCalled();
    });
  });
});
