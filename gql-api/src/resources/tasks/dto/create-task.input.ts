import { InputType, Field, GraphQLISODateTime, Int } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
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

  @Field(() => Int, {
    description: 'The identifier of the owner to which this task belongs.',
  })
  ownerId: number;
}
