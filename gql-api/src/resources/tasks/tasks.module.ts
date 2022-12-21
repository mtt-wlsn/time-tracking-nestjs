import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { TagsService } from '../tags/tags.service';

@Module({
  providers: [TasksResolver, TasksService, TagsService, PrismaService],
})
export class TasksModule {}
