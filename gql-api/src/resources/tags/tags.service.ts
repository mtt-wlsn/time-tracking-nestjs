import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTagInput: CreateTagInput): Promise<Tag> {
    return await this.prisma.tag.create({
      data: {
        label: createTagInput.label,
        name: createTagInput.name,
        description: createTagInput.description,
      },
    });
  }

  async findAll(): Promise<Tag[]> {
    return await this.prisma.tag.findMany();
  }

  async findAllByTask(taskId: number): Promise<Tag[]> {
    const task = await this.prisma.task.findFirst({
      where: { id: taskId },
      select: { tags: true },
    });
    return task.tags;
  }

  async findOne(id: number): Promise<Tag> {
    return await this.prisma.tag.findUnique({ where: { id } });
  }

  async update(updateTagInput: UpdateTagInput): Promise<Tag> {
    return await this.prisma.tag.update({
      where: { id: updateTagInput.id },
      data: {
        label: updateTagInput.label,
        name: updateTagInput.name,
        description: updateTagInput.description,
      },
    });
  }

  async remove(id: number): Promise<Tag> {
    return await this.prisma.tag.delete({ where: { id } });
  }
}
