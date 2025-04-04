import { UserCredsService } from './../user-creds/user-creds.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserCred } from 'src/user-creds/entities/user-cred.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';

type UserToken = {
    access_token: string
}
@Injectable()
export class AuthService {

    constructor(
        private readonly userCredsService: UserCredsService,
        private readonly jwtService: JwtService
    ) { }

    login(user: UserCred): UserToken {
        const payload: UserPayload = {
            sub: `${user.id}`,
            email: user.email,
        }

        const jwtToken = this.jwtService.sign(payload);

        return {
            access_token: jwtToken
        }
    }

    async validateUser(email: string, password: string) {
        const user = await this.userCredsService.findByEmail(email);

        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                return {
                    ...user,
                    password: undefined
                };
            }
        }

        throw new Error('Email addres or passord provided is incorrect');
    }

}
