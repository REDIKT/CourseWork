import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Cell } from "./cell.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { CellCategory } from "src/cell_category/cell_category.entity";
import { Client } from "src/client/client.entity";
import { CreateCellDto } from "./dto/CreateCellDTO.dto";
import { IncompleteCellDto } from "./dto/incomplete-cell.dto";
import { Stocktaking } from "src/stocktacking/stocktaking.entity";

@Injectable()
export class CellService{
    constructor(
        @InjectRepository(Cell) 
        private readonly CellRepository: Repository<Cell>, // "внедряем" репозиторий cell в сервис 
        
        @InjectRepository(CellCategory) 
        private readonly CategoryRepository: Repository<CellCategory>, // "внедряем" репозиторий Affiliation в сервис 

        @InjectRepository(Stocktaking) 
        private readonly StocktakingRepository: Repository<Stocktaking>,
    ) {}

    async create(cellDto: CreateCellDto): Promise<Cell> 
    {
        const cell = this.CellRepository.create(); 
        cell.clientId = cellDto.clientId; 
        cell.categoryId = cellDto.categoryId; 
        cell.capacity = cellDto.capacity; 
        cell.engaged = cellDto.engaged;
        const category = await this.CategoryRepository.findBy({ 
            id: cellDto.categoryId, 
        }); 
        cell.category = category[0]; 
        await this.CellRepository.save(cell); 
        return cell;
    } 
    findOne(id: number): Promise<Cell> { 
        return this.CellRepository.findOne({ 
          where: { id }, 
          relations: { category: true, client: true, stocktakings: true },
        }); 
    
      } 
      async findAll(): Promise<Cell[]> { 
        const cells = await this.CellRepository.find({ 
          relations: { 
    
            category: true, 
    
            client: true, 
    
          }, 
    
        });
        return cells;
    } 
    async update(id: number, updatedCell: Cell) {    
        const cell = await this.CellRepository.findOne({ where: { id } });
        
        if (cell.engaged == false){
          const stocktacking = new Stocktaking();
          stocktacking.admission = new Date().toLocaleDateString()
          stocktacking.cellId = id
          await this.StocktakingRepository.save(stocktacking)
        }
        else{
          const stocktacking = (await this.StocktakingRepository.find({where: {cellId: id}})).reverse()[0];
          stocktacking.disengagement = new Date().toLocaleDateString()
          await this.StocktakingRepository.save(stocktacking)
        }

        cell.clientId = updatedCell.clientId; 
        cell.categoryId = updatedCell.categoryId; 
        cell.capacity = updatedCell.capacity; 
        cell.engaged = updatedCell.engaged;
        cell.category = updatedCell.category;
        cell.client = updatedCell.client;
    
        await this.CellRepository.save(cell);

        return cell; 
    } 
    remove(id: number) { 
        this.CellRepository.delete({ id });
    } 
    async findIncomplete(): Promise<IncompleteCellDto[]> { 

      const cells = await this.findAll();
  
      const incompleteCells: IncompleteCellDto[] = cells.map((cell) => { 
  
  
        const incompleteCell = new IncompleteCellDto(); 
  
        incompleteCell.capacity = cell.capacity; 
  
        return incompleteCell; 
  
      }); 
  
      return incompleteCells; 
  } 
}