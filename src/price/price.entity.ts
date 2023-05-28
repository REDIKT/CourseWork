import { ApiProperty } from '@nestjs/swagger';
import { CellCategory } from 'src/cell_category/cell_category.entity';
import { 
    Column,  
    Entity,  
    JoinTable,   
    ManyToMany,  
    ManyToOne,  
    OneToOne,  
    PrimaryGeneratedColumn,   
  } from 'typeorm';

@Entity('price')
export class Price{

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: '2' })
    @Column()
    categoryId: number;
    
    @ApiProperty({ example: '25' })
    @Column()
    discount: number;
    
    @ApiProperty({ example: '5000' })
    @Column()
    price: number;

    @ManyToOne(() => CellCategory, (category) => category.prices)
    @JoinTable({
        name: 'category_price', 
        joinColumn: { name: 'price_id' },
        inverseJoinColumn: { name: 'category_id' },
    })
    category: CellCategory
}