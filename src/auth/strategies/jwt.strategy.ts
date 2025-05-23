import { Injectable } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserPayload } from '../models/UserPayload';
import { UserFromJwt } from '../models/UserFromJwt';

   
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SECRET_WORD_KEY!
        })
    }

    validate(payload: UserPayload): UserFromJwt {
        return {
            id: payload.sub,
            email: payload.email
        }
    }
}