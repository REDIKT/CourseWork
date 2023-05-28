import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CellCategoryService } from './cell_category.service';
import { CellCategory } from './cell_category.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('cellCategory')
@ApiTags('Категории')
export class CellCategoryController {

  constructor(private readonly cellCategoryService: CellCategoryService) {}

  @ApiOperation({ summary: 'Получение всех категорий' })
  @Get()
  findAll() {
    return this.cellCategoryService.findAll();
  }

  @ApiOperation({ summary: 'Получение категории по id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cellCategoryService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновление данных о категории' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updatecellCategory: CellCategory) {
    return this.cellCategoryService.update(+id, updatecellCategory);
  }

  @ApiOperation({ summary: 'Создание категории' })
  @Post()
  create(@Body() createcellCategory: CellCategory) {
    return this.cellCategoryService.create(createcellCategory);
  }

  @ApiOperation({ summary: 'Удаление категории' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cellCategoryService.remove(+id);
  }
}