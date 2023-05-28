import { Client } from 'src/client/client.entity';
import { CellCategory } from 'src/cell_category/cell_category.entity';
import { 
    Column,  
    Entity,  
    JoinTable,   
    ManyToMany,  
    ManyToOne,  
    OneToMany,  
    PrimaryGeneratedColumn,   
  } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Stocktaking } from 'src/stocktacking/stocktaking.entity';

@Entity('cell')
export class Cell{

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: '1' })
    @Column()
    clientId: number;

    @ApiProperty({ example: '1' })
    @Column()
    categoryId: number;

    @ApiProperty({ example: '25' })
    @Column()
    capacity: number;

    @Column()
    engaged: boolean;

    @ManyToOne(() => Client, (client) => client.cells)
    @JoinTable({
        name: 'client_cell', 
        joinColumn: { name: 'cell_id' },
        inverseJoinColumn: { name: 'client_id' }
    })
    client: Client

    @ManyToOne(() => CellCategory, (category) => category.cells)
    @JoinTable({
        name: 'cell_category', 
        joinColumn: { name: 'cell_id' },
        inverseJoinColumn: { name: 'category_id' },
    })
    category: CellCategory

    @OneToMany(() => Stocktaking, (stocktaking) => stocktaking.cell)
    @JoinTable({
        name: 'stocktaking_cell', 
        joinColumn: { name: 'cell_id' },
        inverseJoinColumn: { name: 'stocktaking_id' },
    })
    stocktakings: Stocktaking[]
}