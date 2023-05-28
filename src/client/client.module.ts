import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { ClientService } from './client.service';
import { ClientController } from './client.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { Cell } from 'src/cell/cell.entity';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [ClientController],
  providers: [ClientService,],
  exports: [ClientService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Client, Cell])]
})
export class ClientModule {}