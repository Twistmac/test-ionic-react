import { Injectable } from '@nestjs/common';
import { CreateClientInput } from './dto/create-client.input';
import { InjectRepository } from '@nestjs/typeorm';
import ClientRepository from './client.repository';

@Injectable()
export class ClientService {
  constructor(@InjectRepository(ClientRepository) private repository: ClientRepository,) {
  }

  create(createClientInput: CreateClientInput) {
    return this.repository.save(createClientInput);
  }

  async findAll() {
    return  await this.repository.find();
  }

  async getMean() {
      const clients = await this.repository.find()
      const total = clients.reduce((prev,next)=> {
          return prev + next.note
      },0)
     return (total / Math.max(1,clients.length)).toFixed(2)
  }
}
