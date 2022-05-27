import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {

  @Field(() => String)
  name: string;

  @Field(() => Int)
  note: number;
}
