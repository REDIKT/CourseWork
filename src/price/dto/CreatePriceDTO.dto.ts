import { CellCategory } from "src/cell_category/cell_category.entity";
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePriceDto { 

  @IsNotEmpty()
  categoryId: number;

  @IsNumber()
  discount: number;

  @IsNumber()
  price: number;
  
  category: CellCategory;
}