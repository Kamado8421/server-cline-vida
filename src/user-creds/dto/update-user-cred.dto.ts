import { PartialType } from '@nestjs/mapped-types';
import { CreateUserCredDto } from './create-user-cred.dto';

export class UpdateUserCredDto extends PartialType(CreateUserCredDto) {}
