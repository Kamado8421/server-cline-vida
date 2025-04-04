import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UserCredsModule } from 'src/user-creds/user-creds.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserCredsModule, JwtModule.register({
    secret: process.env.SECRET_WORD_KEY,
    signOptions: { expiresIn: '30d' }
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule { }
