import { Injectable } from '@nestjs/common';
import { AuthService } from './../auth.service';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'email' });
    }

    validate(email: string, password: string) {
        return this.authService.validateUser(email, password);
    }
}