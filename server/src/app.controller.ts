import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return "Hello from Primeflix API";
  }
}
