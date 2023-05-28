import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CellService } from './cell.service';
import { Cell } from './cell.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('cell')
@ApiTags('Ячейки')
export class CellController {

  constructor(private readonly cellService: CellService) {}

  @ApiOperation({ summary: 'Получение всех ячеек' })
  @Get()
  findAll() {
    return this.cellService.findAll();
  }

  @ApiOperation({ summary: 'Получение ячейки по id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cellService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновление данных о ячейке' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCell: Cell) {
    return this.cellService.update(+id, updateCell);
  }

  @ApiOperation({ summary: 'Создание ячейки' })
  @Post()
  create(@Body() createCell: Cell) {
    return this.cellService.create(createCell);
  }

  @ApiOperation({ summary: 'Удаление ячейки' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cellService.remove(+id);
  }

  @ApiOperation({ summary: 'Получение ячейки с ограниченными полями' })
  @Get('incomplete')
  findIncomplete(){
    this.cellService.findIncomplete();
  }
}