import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'The Users identifier.' })
  id: number;

  @Field(() => String, { description: 'The users email address.' })
  email: string;

  @Field(() => String, { description: 'The users name (for display purposes)' })
  name: string;
}
