import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUp(signUpDto: SignUpDto) {
    const existingUser = await this.userService.findByEmail(signUpDto.email);

    if (existingUser) throw new ConflictException();

    return 'This action adds a new auth';
  }

  signIn(signInDto: SignInDto) {
    return `This action returns all auth`;
  }
}
