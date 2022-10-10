import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { TagsModule } from './tags/tags.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [TagsModule, UsersModule, TasksModule],
})
export class ResourcesModule {}
