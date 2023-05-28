import { ApiProperty } from '@nestjs/swagger';
import { Cell } from 'src/cell/cell.entity';
import { Price } from 'src/price/price.entity';

import { 
    Column,  
    Entity,  
    JoinTable,   
    ManyToMany,  
    OneToMany,  
    OneToOne,  
    PrimaryGeneratedColumn,   
  } from 'typeorm';

@Entity('category')
export class CellCategory{

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Категория' })
    @Column()
    name: string;

    @OneToMany(() => Cell, (cell) => cell.category)
    @JoinTable({
        name: 'cell_category', 
        joinColumn: { name: 'category_id' },
        inverseJoinColumn: { name: 'cell_id' },
    })
    cells: Cell[]

    @OneToMany(() => Price, (price) => price.category)
    @JoinTable({
        name: 'category_price', 
        joinColumn: { name: 'category_id' },
        inverseJoinColumn: { name: 'price_id' },
    })
    prices: Price[]
}