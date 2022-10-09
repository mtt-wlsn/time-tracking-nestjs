import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.prisma.user.create({
      data: {
        email: createUserInput.email,
        name: createUserInput.name,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    return await this.prisma.user.update({
      where: { id },
      data: {
        email: updateUserInput.email,
        name: updateUserInput.name,
      },
    });
  }

  async remove(id: number): Promise<User> {
    return await this.prisma.user.delete({ where: { id } });
  }
}
