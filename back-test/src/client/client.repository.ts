import { Client } from './entities/client.entity';
import {EntityRepository, Repository } from 'typeorm';

@EntityRepository(Client)
export default class ClientRepository extends Repository<Client> {
  constructor() {
    super();
  }
}
