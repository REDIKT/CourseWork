import { CellCategory } from "src/cell_category/cell_category.entity";
import { Client } from "src/client/client.entity";
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateCellDto { 
  @IsNotEmpty()
  clientId: number;

  @IsNotEmpty()
  categoryId: number;

  @IsNotEmpty()
  capacity: number;

  @IsBoolean()
  engaged: boolean;
  
  client: Client; 
  category: CellCategory;
}