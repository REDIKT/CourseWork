import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/auth/other/role.enum';
import { Cell } from 'src/cell/cell.entity';
import { 
    Column,  
    Entity,  
    JoinTable,   
    ManyToMany,  
    OneToMany,  
    PrimaryColumn,  
    PrimaryGeneratedColumn,   
  } from 'typeorm';

@Entity('client')
export class Client{

    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({ example: 'Валерьев Валерий Валерьевич' })
    @Column()
    name: string

    @ApiProperty({ example: 'xxxxxx@xxxx.xxx' })
    @Column()
    email: string

    @ApiProperty({ example: '+xxxxxxxxxxxx' })
    @Column()
    phone_number: string

    @ApiProperty({example: '************'})
    @Column()
    password: string    


    @Column({type: 'enum', enum: Role, default: Role.USER})
    role: Role;
    

    @OneToMany(() => Cell, (cell) => cell.client)
    @JoinTable({
        name: 'client_cell', 
        joinColumn: { name: 'client_id' },
        inverseJoinColumn: { name: 'cell_id' }
    })
    cells: Cell[]
}