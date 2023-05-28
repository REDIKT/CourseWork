import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { PriceService } from './price.service';
import { PriceController } from './price.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { CellCategory } from 'src/cell_category/cell_category.entity';
import { Price } from './price.entity';

@Module({
  controllers: [PriceController],
  providers: [PriceService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Price, CellCategory])]
})
export class PriceModule {}