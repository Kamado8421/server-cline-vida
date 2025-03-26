import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserCredDto } from './dto/create-user-cred.dto';
import { UserCredsService } from './user-creds.service';

@Controller('user-creds')
export class UserCredsController {
  constructor(private readonly userCredsService: UserCredsService) {}

  @Post()
  create(@Body() createUserCredDto: CreateUserCredDto) {
    return this.userCredsService.create(createUserCredDto);
  }

  // @Get()
  // findAll() {
  //   return this.userCredsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userCredsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserCredDto: UpdateUserCredDto) {
  //   return this.userCredsService.update(+id, updateUserCredDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userCredsService.remove(+id);
  // }
}
