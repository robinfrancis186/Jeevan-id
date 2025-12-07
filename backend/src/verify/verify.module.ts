import { Module } from '@nestjs/common';
import { VerifyService } from './verify.service';
import { VerifyController } from './verify.controller';
import { SignerModule } from '../signer/signer.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [SignerModule],
  controllers: [VerifyController],
  providers: [VerifyService, PrismaService],
})
export class VerifyModule {}
