import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        ...createUserDto,
        wishlist: {
          create: {
            labels: {
              createMany: {
                data: [
                  { color: "#f4b8e4" },
                  { color: "#ca9ee6" },
                  { color: "#e78284" },
                  { color: "#ea999c" },
                  { color: "#ef9f76" },
                  { color: "#e5c890" },
                  { color: "#a6d189" },
                  { color: "#81c8be" },
                ],
              },
            },
          },
        },
      },
    });
  }

  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return this.prismaService.user.delete({ where: { id } });
  }
}
