import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Tag } from 'src/resources/tags/entities/tag.entity';

@ObjectType()
export class Task {
  @Field(() => Int, { description: 'The task identifier.' })
  id: number;

  @Field(() => GraphQLISODateTime, {
    description: 'The date/time stamp of when the task began.',
  })
  startTime: Date;

  @Field(() => GraphQLISODateTime, {
    description: 'The date/time stamp of when the task completed.',
  })
  endTime: Date;

  @Field(() => String, {
    description: 'A description of the task that took place.',
  })
  description: string;

  @Field(() => [Tag], {
    nullable: true,
    description: 'The tags that have been applied to this task.',
  })
  tags?: Tag[];
}
