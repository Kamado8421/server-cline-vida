import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserCredsModule } from './user-creds/user-creds.module';

@Module({
  imports: [UserCredsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
