import { Body, Controller, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { AllowUnauthorizedRequest } from "src/common/decorators";
import { SignedUserReq } from "src/common/interfaces";

import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/signin.dto";
import { SignUpDto } from "./dto/signup.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  @AllowUnauthorizedRequest()
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post("signin")
  @AllowUnauthorizedRequest()
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post("delete")
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteAccount(@Req() { user }: SignedUserReq) {
    return this.authService.deleteAccount(user);
  }
}
