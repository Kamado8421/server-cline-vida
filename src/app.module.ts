import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserCredsModule } from './user-creds/user-creds.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserCredsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
