import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Tag {
  @Field(() => ID, { description: 'The tags unique internal identifier.' })
  id: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
