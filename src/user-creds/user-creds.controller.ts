import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserCredDto } from './dto/create-user-cred.dto';
import { UserCredsService } from './user-creds.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserCred } from './entities/user-cred.entity';
import { UserData } from './models/UserData';

@Controller('user')
export class UserCredsController {
  constructor(private readonly userCredsService: UserCredsService) { }

  @Post()
  create(@Body() createUserCredDto: CreateUserCredDto) {
    return this.userCredsService.create(createUserCredDto);
  }

  @Get()
  async findOne(@CurrentUser() user: UserCred) {
    const data = await this.userCredsService.findUserFullByEmail(user.email);
  
    if (data) {
      const { password, ...userWithoutPassword } = data.user;
      const { userId, id, ...infoWithoutIds } = data.info;
  
      const dataFormatted = {
        info: infoWithoutIds,
        user: userWithoutPassword
      };
  
      return dataFormatted;
    }
  
    return undefined;
  }
  


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
