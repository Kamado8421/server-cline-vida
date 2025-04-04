import { Module } from '@nestjs/common';
import { UserCredsService } from './user-creds.service';
import { UserCredsController } from './user-creds.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [UserCredsController],
  providers: [UserCredsService],
  imports: [PrismaClient],
  exports: [UserCredsService]
})
export class UserCredsModule {}
