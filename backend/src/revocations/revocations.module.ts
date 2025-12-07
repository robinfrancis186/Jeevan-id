import { Module } from '@nestjs/common';
import { RevocationsService } from './revocations.service';
import { RevocationsController } from './revocations.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuditModule } from '../audit/audit.module';

@Module({
  imports: [AuditModule],
  controllers: [RevocationsController],
  providers: [RevocationsService, PrismaService],
  exports: [RevocationsService],
})
export class RevocationsModule {}

