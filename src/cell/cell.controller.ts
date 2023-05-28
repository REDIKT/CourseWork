import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { CellService } from './cell.service';
import { Cell } from './cell.entity';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Roles } from 'src/auth/other/role.decorator';
import { Role } from 'src/auth/other/role.enum';
import { RolesGuard } from 'src/auth/guard/role.guard';


@Controller('cell')
@ApiTags('Ячейки')
export class CellController {

  constructor(private readonly cellService: CellService) {}

  @ApiOperation({ summary: 'Получение всех ячеек' })
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.cellService.findAll();
  }

  @ApiOperation({ summary: 'Получение ячейки по id' })
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cellService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновление данных о ячейке' })
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCell: Cell) {
    return this.cellService.update(+id, updateCell);
  }

  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Создание ячейки' })
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCell: Cell) {
    return this.cellService.create(createCell);
  }

  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Удаление ячейки' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cellService.remove(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Получение ячейки с ограниченными полями' })
  @Get('incomplete')
  findIncomplete(){
    this.cellService.findIncomplete();
  }
}