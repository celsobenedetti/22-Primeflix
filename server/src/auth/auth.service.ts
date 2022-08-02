import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { compareHash, createJwt, hashString } from "src/common/utils";
import { UserService } from "src/modules/user/user.service";
import { SignInDto } from "./dto/signin.dto";
import { SignUpDto } from "./dto/signup.dto";
import { JwtPayload } from "./interfaces/jwt-payload.interface";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUp(signUpDto: SignUpDto) {
    const existingUser = await this.userService.findByEmail(signUpDto.email);

    if (existingUser) throw new ConflictException("Email already registered");

    const hashedPassword = await hashString(signUpDto.password);
    const { id, email, name } = await this.userService.create({
      ...signUpDto,
      password: hashedPassword,
    });

    return { token: createJwt({ id, email, name }) };
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findByEmail(signInDto.email);

    const isValidCredentials = user && (await compareHash(signInDto.password, user.password));
    if (!isValidCredentials) throw new UnauthorizedException("Invalid Credentials");

    return { token: createJwt(user) };
  }

  async deleteAccount(userData: JwtPayload) {
    const user = await this.userService.findByEmail(userData.email);

    if (!user) throw new NotFoundException("Email not registered");

    await this.userService.remove(userData.id);
  }
}
