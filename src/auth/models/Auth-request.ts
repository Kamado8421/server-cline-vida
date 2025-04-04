import { Request } from "express";
import { UserCred } from "src/user-creds/entities/user-cred.entity";

export interface AuthRequest extends Request {
    user: UserCred;
}