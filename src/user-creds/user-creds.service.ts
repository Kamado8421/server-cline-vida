import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserCredDto } from './dto/create-user-cred.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserCredsService {
  constructor(/*private readonly prisma1: PrismaClient*/) { }

  async create(createUserCredDto: CreateUserCredDto) {

    const prisma = new PrismaClient();

    try {
      const userExists = await this.findByEmail(createUserCredDto.email);

      if (userExists) {
        return {
          statusCode: 409,
          message: "Email already exists"
        }
      };

      const data = await prisma.userCreds.create({
        data: {
          email: createUserCredDto.email,
          password: await bcrypt.hash(createUserCredDto.password, 10),
        }
      })


      return { ...data, password: undefined }

    } catch (error) {
      console.error(error);
      throw new Error('Error creating user');
    }
  }


  async findByEmail(email: string) {

    const prisma = new PrismaClient();

    const user = await prisma.userCreds.findUnique({
      where: { email }
    });

    return user;
  }

  async findUserFullByEmail(email: string) {
    const prisma = new PrismaClient();

    const user = await prisma.userCreds.findUnique({
      where: { email }
    });

    if (user) {
      const info = await prisma.userInfo.findUnique({
        where: {
          userId: user.id
        }
      })

      const data = {
        user: { ...user },
        info: { ...info }
      }
      
      return data;
    }


  }

}
