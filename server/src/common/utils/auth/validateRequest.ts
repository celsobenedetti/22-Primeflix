import { PrismaService } from 'src/prisma/prisma.service';
import { decodeJwt } from './jwt';

export const validateRequest = async (
  request: any,
  prismaService: PrismaService,
) => {
  try {
    const token = request.headers?.authorization?.split(' ')[1];
    const payload = decodeJwt(token);

    const user = await prismaService.user.findUnique({
      where: { id: payload.id },
    });

    if (!user) return false;
  } catch (err) {
    return false;
  }
};
