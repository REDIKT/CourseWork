import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { CellCategoryService } from './cell_category.service';
import { CellCategoryController } from './cell_category.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { CellCategory } from './cell_category.entity';
import { Cell } from 'src/cell/cell.entity';
import { Price } from 'src/price/price.entity';

@Module({
  controllers: [CellCategoryController],
  providers: [CellCategoryService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([CellCategory, Cell, Price])]
})
export class CellCategoryModule {}