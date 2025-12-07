import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { VerifyService } from './verify.service';

class VerifyDto {
  jws: string;
}

@Controller('verify')
export class VerifyController {
  constructor(private readonly verifyService: VerifyService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async verify(@Body() body: VerifyDto) {
    if (!body.jws) {
      return { error: 'jws is required' };
    }
    return this.verifyService.verify(body.jws);
  }
}

