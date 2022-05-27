
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Client {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String)
  @Column('varchar')
  name: string;

  @Field(() => Int)
  @Column('integer')
  note: number;

  @Field()
  @CreateDateColumn()
  created_at: Date

}
