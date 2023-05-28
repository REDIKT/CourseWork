import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { CellController } from 'src/cell/cell.controller';
import { CellService } from './cell.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cell } from './cell.entity';
import { CellCategory } from 'src/cell_category/cell_category.entity';
import { Client } from 'src/client/client.entity';
import { Stocktaking } from 'src/stocktacking/stocktaking.entity';

@Module({
  controllers: [CellController],
  providers: [CellService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Cell, CellCategory, Stocktaking])]
})
export class CellModule {}