import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import ClientRepository from './client.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClientRepository])
  ],
  providers: [ClientResolver, ClientService]
})
export class ClientModule {}
