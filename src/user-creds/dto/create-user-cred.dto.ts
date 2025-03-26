import { IsBoolean, IsEmail, IsString, MinLength } from "class-validator";
import { UserCred } from "../entities/user-cred.entity";

export class CreateUserCredDto {

    @IsEmail()
    /* declare */email: string;

    @IsString()
    @MinLength(8)
    /* declare */password: string;

    @IsBoolean()
    /* declare */isFullRegister: boolean;

    
}
