import { Controller, Get } from '@nestjs/common';
import { SignerService } from './signer.service';

@Controller('jwks')
export class SignerController {
  constructor(private readonly signerService: SignerService) {}

  @Get()
  getJwks() {
    return this.signerService.getJwks();
  }
}
