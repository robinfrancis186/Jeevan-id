import { Controller, Get, Query } from '@nestjs/common';
import { AuditService } from './audit.service';

@Controller('audit')
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Get()
  list(@Query('limit') limit?: string) {
    const take = limit ? Math.min(parseInt(limit, 10) || 50, 200) : 50;
    return this.auditService.list(take);
  }
}

