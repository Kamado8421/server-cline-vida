import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { AuthRequest } from "../models/Auth-request";
import { UserCred } from "src/user-creds/entities/user-cred.entity";

export const CurrentUser = createParamDecorator(
    (data: unknown, contex: ExecutionContext): UserCred => {
        const request = contex.switchToHttp().getRequest<AuthRequest>();

        return request.user;
    }
)