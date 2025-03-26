import { Module } from '@nestjs/common';
import { UserCredsService } from './user-creds.service';
import { UserCredsController } from './user-creds.controller';
import { PrismaClient } from '@prisma/client';
import { CreateUserCredDto } from './dto/create-user-cred.dto';

@Module({
  controllers: [UserCredsController],
  providers: [UserCredsService],
  imports: []
})
export class UserCredsModule {}
