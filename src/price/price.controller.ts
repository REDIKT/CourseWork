import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { PriceService } from './price.service';
import { Price } from './price.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';


@Controller('Price')
@ApiTags('Цены')
export class PriceController {

  constructor(private readonly PriceService: PriceService) {}

  @ApiOperation({ summary: 'Получение всех цен' })
  @Get()
  findAll() {
    return this.PriceService.findAll();
  }

  @ApiOperation({ summary: 'Получение цены по id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PriceService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновление данных о цене' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePrice: Price) {
    return this.PriceService.update(+id, updatePrice);
  }

  @ApiOperation({ summary: 'Создание цены' })
  @Post()
  create(@Body() createPrice: Price) {
    return this.PriceService.create(createPrice);
  }

  @ApiOperation({ summary: 'Удаление цены' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PriceService.remove(+id);
  }
}