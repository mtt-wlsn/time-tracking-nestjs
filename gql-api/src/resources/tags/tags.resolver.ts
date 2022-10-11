import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TagsService } from './tags.service';
import { Tag } from './entities/tag.entity';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';

@Resolver(() => Tag)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Mutation(() => Tag)
  async createTag(@Args('createTagInput') createTagInput: CreateTagInput) {
    return await this.tagsService.create(createTagInput);
  }

  @Query(() => [Tag], { name: 'tags' })
  async findAll() {
    return await this.tagsService.findAll();
  }

  @Query(() => Tag, { name: 'tag' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.tagsService.findOne(id);
  }

  @Mutation(() => Tag)
  async updateTag(@Args('updateTagInput') updateTagInput: UpdateTagInput) {
    return await this.tagsService.update(updateTagInput);
  }

  @Mutation(() => Tag)
  async removeTag(@Args('id', { type: () => Int }) id: number) {
    return await this.tagsService.remove(id);
  }
}
