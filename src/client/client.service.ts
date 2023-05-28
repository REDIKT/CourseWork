import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Client } from "./client.entity";
import { IncompleteClientDto } from "./dto/incomplete-client.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Cell } from "src/cell/cell.entity";
import { In, Repository } from "typeorm";
import { CreateClientDto } from "./dto/CreateClientDTO.dto";

@Injectable()
export class ClientService{
    constructor( 

        @InjectRepository(Client) 
        private readonly ClientRepository: Repository<Client>,
    
        @InjectRepository(Cell) 
        private readonly CellRepository: Repository<Cell>, 
    ) {} 
    async create(clientDto: CreateClientDto): Promise<Client> 
    { 
        const client = this.ClientRepository.create();
        client.name = clientDto.name; 
        client.email = clientDto.email;
        client.phone_number = clientDto.phone_number;
        client.password = clientDto.password;
         
        await this.ClientRepository.save(client); //сохраняем объект client в БД 
       
        return client; //возвращаем объект client 
       
    } 
    findOne(id: number): Promise<Client> { 
        return this.ClientRepository.findOne({ 
          where: { id }, 
          relations: { cells: true },
        }); 
    }
    findByEmail(email: string): Promise<Client>{
      return this.ClientRepository.findOne({
          where: {email}
      });
    }
    async findAll(): Promise<Client[]> { 
        const clients = await this.ClientRepository.find({ 
          relations: { 
            cells: true,  
          }, 
    
        });
        return clients;
    } 
    async findIncomplete(): Promise<IncompleteClientDto[]> { 

        const clients = await this.findAll();
    
        const incompleteClients: IncompleteClientDto[] = clients.map((client) => { 
    
    
          const incompleteClient = new IncompleteClientDto(); 
    
          incompleteClient.name = client.name; 
    
          return incompleteClient; 
    
        }); 
    
        return incompleteClients; 
    
    } 
    async update(id: number, updatedClient: Client) {    
        const Client = await this.ClientRepository.findOne({ where: { id } });
        
        Client.name = updatedClient.name;
        Client.email = updatedClient.email;
        Client.phone_number = updatedClient.phone_number;
        Client.cells = updatedClient.cells;
        Client.password = updatedClient.password;
    
        await this.ClientRepository.save(Client);
    
        return Client; 
    } 
    remove(id: number) { 
        this.ClientRepository.delete({ id });
    } 
}