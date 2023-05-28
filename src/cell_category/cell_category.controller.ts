import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { CellCategoryService } from './cell_category.service';
import { CellCategory } from './cell_category.entity';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/other/role.decorator';
import { Role } from 'src/auth/other/role.enum';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';


@Controller('cellCategory')
@ApiTags('Категории')
export class CellCategoryController {

  constructor(private readonly cellCategoryService: CellCategoryService) {}

  @ApiOperation({ summary: 'Получение всех категорий' })
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.cellCategoryService.findAll();
  }

  @ApiOperation({ summary: 'Получение категории по id' })
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cellCategoryService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновление данных о категории' })
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updatecellCategory: CellCategory) {
    return this.cellCategoryService.update(+id, updatecellCategory);
  }

  @ApiOperation({ summary: 'Создание категории' })
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createcellCategory: CellCategory) {
    return this.cellCategoryService.create(createcellCategory);
  }

  @ApiOperation({ summary: 'Удаление категории' })
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cellCategoryService.remove(+id);
  }
}