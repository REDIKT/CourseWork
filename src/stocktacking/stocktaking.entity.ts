import { Client } from 'src/client/client.entity';
import { CellCategory } from 'src/cell_category/cell_category.entity';
import { 
    Column,  
    Entity,  
    JoinTable,   
    ManyToMany,  
    ManyToOne,  
    PrimaryGeneratedColumn,   
  } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Cell } from 'src/cell/cell.entity';

@Entity('stocktaking')
export class Stocktaking{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    admission: string;

    @Column()
    disengagement: string;

    @Column()
    cellId: number

    @ManyToOne(() => Cell, (cell) => cell.stocktakings)
    @JoinTable({
        name: 'stocktaking_cell', 
        joinColumn: { name: 'stocktaking_id' },
        inverseJoinColumn: { name: 'cell_id' },
    })
    cell: Cell
}