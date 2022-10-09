import { Injectable } from '@nestjs/common';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  private tags: Tag[] = [];

  create(createTagInput: CreateTagInput) {
    const newTag: Tag = {
      id: 1234,
      exampleField: createTagInput.exampleField,
    };
    this.tags.push(newTag);
    return newTag;
  }

  findAll(): Tag[] {
    return this.tags;
  }

  findOne(id: number): Tag {
    return this.tags.filter((tag) => tag.id == id)[0];
  }

  update(id: number, updateTagInput: UpdateTagInput) {
    const tag = this.findOne(id);
    tag.exampleField = updateTagInput.exampleField;
    return tag;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
