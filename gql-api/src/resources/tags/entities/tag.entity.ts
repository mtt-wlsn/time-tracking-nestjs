import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Tag {
  @Field(() => Int, { description: 'The tags unique internal identifier.' })
  id: number;

  @Field(() => String, {
    description:
      'The label of the tag that appears whenever in most non-detailed views.',
  })
  label: string;

  @Field(() => String, {
    description:
      'A more detailed name of the tag that will be displayed when viewing tag details.  May commonly be identical to the tag.',
  })
  name: string;

  @Field(() => String, {
    description:
      'A detailed description of the tag.  Shown when viewing tag details.',
  })
  description: string;
}
