import { Cell } from "src/cell/cell.entity";
import { Price } from "src/price/price.entity";
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto { 
  
  @IsNotEmpty()
  name: string;
  
  cells: Cell[];
  prices: Price[];
}