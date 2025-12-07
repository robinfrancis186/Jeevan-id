import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RevocationsService } from './revocations.service';
import { CreateRevocationDto } from './dto/create-revocation.dto';

@Controller('revocations')
export class RevocationsController {
  constructor(private readonly revocationsService: RevocationsService) {}

  @Get()
  async list() {
    return this.revocationsService.list();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateRevocationDto) {
    return this.revocationsService.create(dto);
  }
}

