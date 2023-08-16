import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class AppController {
  @Get("/test")
  getSomething() {
    return "test 1";
  }
}
