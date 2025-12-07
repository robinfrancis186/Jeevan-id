import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { PrismaService } from '../prisma/prisma.service';
import { SignerModule } from '../signer/signer.module';
import { AuditModule } from '../audit/audit.module';

@Module({
  imports: [SignerModule, AuditModule],
  controllers: [PersonsController],
  providers: [PersonsService, PrismaService],
})
export class PersonsModule {}

