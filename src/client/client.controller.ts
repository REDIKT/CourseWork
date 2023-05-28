import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request} from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger'; 
import { CreateClientDto } from './dto/CreateClientDTO.dto';
//import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/other/role.decorator';
import { Role } from 'src/auth/other/role.enum';
import {RolesGuard} from 'src/auth/guard/role.guard';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';


@Controller('client')
@ApiTags('Клиенты')
export class ClientController {

  constructor(private readonly clientService: ClientService) {}

  @ApiOperation({ summary: 'Получение всех клиентов' })
  @Get()
  @ApiBearerAuth('JWT-auth')
  findAll() {
    return this.clientService.findAll();
  }

  @ApiOperation({ summary: 'Получение клиента по id' })
  @Get(':id')
  @ApiBearerAuth('JWT-auth')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @ApiOperation({ summary: 'Получение клиента с ограниченными полями' })
  @Get('incomplete')
  findIncomplete(){
    this.clientService.findIncomplete();
  }

  @ApiOperation({ summary: 'Дополнение данных о клиенте' })
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateclient: Client, @Request() req) {
    return this.clientService.update(+id, updateclient);
  }
  
  @ApiOperation({ summary: 'Создание клиента' })
  @Post()
  create(@Body() createclient: CreateClientDto) {
    return this.clientService.create(createclient);
  }

  @ApiOperation({ summary: 'Удаление данных о клиенте' })
  @ApiBearerAuth('JWT-auth')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}