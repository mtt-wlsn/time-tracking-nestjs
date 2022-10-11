import { CreateTagInput } from './create-tag.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTagInput extends PartialType(CreateTagInput) {
  @Field(() => Int)
  id: number;
}
