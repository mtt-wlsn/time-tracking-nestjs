import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'The users email address.' })
  email: string;

  @Field(() => String, { description: 'The users name (for display purposes)' })
  name: string;
}
