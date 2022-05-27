import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { Client } from './entities/client.entity';
import { CreateClientInput } from './dto/create-client.input';

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Mutation(() => Client)
  createClient(@Args('input') createClientInput: CreateClientInput) {
    return this.clientService.create(createClientInput);
  }

  @Query(() => [Client], { name: 'listClient' })
  findAll() {
    return this.clientService.findAll();
  }

  @Query(() => Float, { name: 'clientMean' })
  getMean() {
    return this.clientService.getMean();
  }

}
