import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Price } from "./price.entity";
import { CellCategory } from "src/cell_category/cell_category.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { CreatePriceDto } from "./dto/CreatePriceDTO.dto";

@Injectable()
export class PriceService{
    constructor(
        @InjectRepository(Price) 
        private readonly PriceRepository: Repository<Price>,
        
        @InjectRepository(CellCategory) 
        private readonly CategoryRepository: Repository<CellCategory>,
    ) {}
    async create(priceDto: CreatePriceDto): Promise<Price> 
    {
        const price = this.PriceRepository.create(); 
        price.categoryId = priceDto.categoryId;
        price.discount = priceDto.discount;
        price.price = priceDto.price;
        const category = await this.CategoryRepository.findBy({ 
            id: priceDto.categoryId, 
        }); 
        price.category = category[0]; 
        await this.PriceRepository.save(price); 
        return price;
    } 
    findOne(id: number): Promise<Price> { 
        return this.PriceRepository.findOne({ 
          where: { id }, 
          relations: { category: true },
        }); 
    
      } 
      async findAll(): Promise<Price[]> { 
        const prices = await this.PriceRepository.find({ 
          relations: { 
            category: true
          }, 
    
        });
        return prices;
    } 
    async update(id: number, updatedPrice: Price) {    
        const price = await this.PriceRepository.findOne({ where: { id } });
    
        price.categoryId = updatedPrice.categoryId;
        price.discount = updatedPrice.discount;
        price.price = updatedPrice.price;
        price.category = updatedPrice.category;
    
        await this.PriceRepository.save(price);
    
        return price; 
    } 
    remove(id: number) { 
        this.PriceRepository.delete({ id });
    } 
}