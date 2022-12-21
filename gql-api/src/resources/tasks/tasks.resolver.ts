import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Tag } from '../tags/entities/tag.entity';
import { TagsService } from '../tags/tags.service';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';
import { TasksService } from './tasks.service';

@Resolver(() => Task)
export class TasksResolver {
  constructor(
    private readonly tasksService: TasksService,
    private readonly tagsService: TagsService,
  ) {}

  @Mutation(() => Task)
  async createTasks(@Args('createTaskInput') createTaskInput: CreateTaskInput) {
    return await this.tasksService.create(createTaskInput);
  }

  @Query(() => [Task], { name: 'tasks' })
  async findAll(@Args('userId', { type: () => Int }) userId: number) {
    return await this.tasksService.findAllForUser(userId);
  }

  @Query(() => Task, { name: 'task' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.tasksService.findOne(id);
  }

  @Mutation(() => Task)
  async updateTasks(@Args('updateTaskInput') updateTaskInput: UpdateTaskInput) {
    return await this.tasksService.update(updateTaskInput);
  }

  @Mutation(() => Task)
  async removeTask(@Args('id', { type: () => Int }) id: number) {
    return await this.tasksService.remove(id);
  }

  @ResolveField('tags', () => [Tag])
  async tags(@Parent() task: Task): Promise<Tag[]> {
    return await this.tagsService.findAllByTask(task.id);
  }
}
