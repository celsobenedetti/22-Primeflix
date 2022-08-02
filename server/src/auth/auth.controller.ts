import { Body, Controller, Post } from "@nestjs/common";
import { AllowUnauthorizedRequest } from "src/common/decorators";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/signin.dto";
import { SignUpDto } from "./dto/signup.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  @AllowUnauthorizedRequest()
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post("signin")
  @AllowUnauthorizedRequest()
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }
}
