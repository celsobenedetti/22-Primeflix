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
                  { color: "#ef4444" },
                  { color: "#fde047" },
                  { color: "#059669" },
                  { color: "#0891b2" },
                  { color: "#8b5cf6" },
                  { color: "#ec4899" },
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
