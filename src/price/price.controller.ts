import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { PriceService } from './price.service';
import { Price } from './price.entity';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/auth/other/role.decorator';
import { Role } from 'src/auth/other/role.enum';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';


@Controller('Price')
@ApiTags('Цены')
export class PriceController {

  constructor(private readonly PriceService: PriceService) {}

  @ApiOperation({ summary: 'Получение всех цен' })
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.PriceService.findAll();
  }

  @ApiOperation({ summary: 'Получение цены по id' })
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PriceService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновление данных о цене' })
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePrice: Price) {
    return this.PriceService.update(+id, updatePrice);
  }

  @ApiOperation({ summary: 'Создание цены' })
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPrice: Price) {
    return this.PriceService.create(createPrice);
  }

  @ApiOperation({ summary: 'Удаление цены' })
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PriceService.remove(+id);
  }
}