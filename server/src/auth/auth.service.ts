import { Injectable } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  signUp(signUpDto: SignUpDto) {
    return 'This action adds a new auth';
  }

  signIn(signInDto: SignInDto) {
    return `This action returns all auth`;
  }
}
