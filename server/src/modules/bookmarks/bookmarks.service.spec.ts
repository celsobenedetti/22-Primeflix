import { Test, TestingModule } from "@nestjs/testing";
import { UserFactory } from "src/database/factories/user.factory";
import { PrismaService } from "src/database/prisma/prisma.service";
import { BookmarksService } from "./bookmarks.service";

describe("BookmarksService", () => {
  let bookmarksService: BookmarksService;
  let prismaService: PrismaService;

  const factory = new UserFactory();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookmarksService, PrismaService],
    }).compile();

    bookmarksService = module.get<BookmarksService>(BookmarksService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe("findAll", () => {
    it("should call prismaService.findUnique", async () => {
      jest.spyOn(prismaService.user, "findUnique").mockImplementationOnce((): any => undefined);

      await bookmarksService.findAll(factory.newMockJwt());

      expect(prismaService.user.findUnique).toBeCalled();
    });
  });
});
