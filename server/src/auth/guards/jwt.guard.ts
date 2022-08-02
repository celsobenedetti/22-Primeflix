import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { validateRequest } from 'src/common/utils/auth/validateRequest';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prismaService: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const allowUnauthorizedRequest = this.reflector.get<boolean>(
      'allowUnauthorizedRequest',
      context.getClass(),
    );

    return (
      allowUnauthorizedRequest || validateRequest(request, this.prismaService)
    );
  }
}
