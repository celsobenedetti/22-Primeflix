import { Controller, Get } from "@nestjs/common";
import { AllowUnauthorizedRequest } from "src/common/decorators";

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @AllowUnauthorizedRequest()
  getHello(): string {
    return "Hello from Primeflix API";
  }
}
