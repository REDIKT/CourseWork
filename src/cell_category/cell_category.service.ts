import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { CellCategory } from "./cell_category.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Cell } from "src/cell/cell.entity";
import { Price } from "src/price/price.entity";
import { CreateCategoryDto } from "./dto/CreateCategoryDTO.dto";

@Injectable()
export class CellCategoryService{
    constructor( 

        @InjectRepository(CellCategory) 
        private readonly CategoryRepository: Repository<CellCategory>,
    
        @InjectRepository(Cell) 
        private readonly CellRepository: Repository<Cell>, 
    
        @InjectRepository(Price) 
        private readonly PriceRepository: Repository<Price>,
      ) {} 
    async create(categoryDto: CreateCategoryDto): Promise<CellCategory> 
    { 
     
        const category = this.CategoryRepository.create(); 
        category.name = categoryDto.name; 
     
        await this.CategoryRepository.save(category); //сохраняем объект category в БД 
     
        return category; //возвращаем объект category 
     
    } 
    findOne(id: number): Promise<CellCategory> { 
        return this.CategoryRepository.findOne({ 
          where: { id }, 
          relations: { cells: true, prices: true },
        }); 
    }
    async findAll(): Promise<CellCategory[]> { 
        const categories = await this.CategoryRepository.find({ 
          relations: { 
    
            cells: true, 
    
            prices: true, 
    
          }, 
    
        });
        return categories;
    } 
    async update(id: number, updatedCategory: CellCategory) {    
        const category = await this.CategoryRepository.findOne({ where: { id } });
    
        category.name = updatedCategory.name;
        category.cells = updatedCategory.cells;
        category.prices = updatedCategory.prices;
    
        await this.CellRepository.save(category);
    
        return category; 
    } 
    remove(id: number) { 
        this.CategoryRepository.delete({ id });
    } 
}