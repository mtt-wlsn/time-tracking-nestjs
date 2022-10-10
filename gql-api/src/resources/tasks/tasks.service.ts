import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskInput: CreateTaskInput): Promise<Task> {
    return await this.prisma.task.create({
      data: {
        startTime: createTaskInput.startTime,
        endTime: createTaskInput.endTime,
        description: createTaskInput.description,
        ownerId: createTaskInput.ownerId,
      },
    });
  }

  async findAllForUser(ownerId: number): Promise<Task[]> {
    return await this.prisma.task.findMany({ where: { ownerId: ownerId } });
  }

  async findOne(id: number): Promise<Task> {
    return await this.prisma.task.findUnique({ where: { id } });
  }

  async update(updateTaskInput: UpdateTaskInput): Promise<Task> {
    return await this.prisma.task.update({
      where: { id: updateTaskInput.id },
      data: {
        startTime: updateTaskInput.startTime,
        endTime: updateTaskInput.endTime,
        description: updateTaskInput.description,
      },
    });
  }

  async remove(id: number): Promise<Task> {
    return this.prisma.task.delete({ where: { id } });
  }
}
