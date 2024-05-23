import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ path: 'myapi' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/gethello')
  getHello(): string {
    return this.appService.getHello();
  }
}
