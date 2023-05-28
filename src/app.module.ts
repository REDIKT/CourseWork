import { Module } from '@nestjs/common';
import { CellModule } from './cell/cell.module';
import { CellCategoryModule } from './cell_category/cell_category.module';
import { ClientModule } from './client/client.module';
import { DatasourceModule } from './datasource/datasource.module';
import { PriceModule } from './price/price.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client } from './client/client.entity';
import { Initial1683910301751 } from './migrations/1683910301751-initial';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import {RolesGuard} from './auth/guard/role.guard';
import { StocktakingModule } from './stocktacking/stocktaking.module';

@Module({
  imports: [CellModule, CellCategoryModule, ClientModule, PriceModule, DatasourceModule, 
    TypeOrmModule.forRoot(
      {
        type: 'postgres', //тип подключаемой БД 
        port: 5432, //порт 
        username: 'postgres', //имя пользователя 
        database: 'postgres',
        password: 'ygihegr1', //пароль 
        host: 'localhost', //хост, в нашем случае БД развернута локально 
        synchronize: false,//отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново) 
        logging: 'all', //включим логирование для удобства отслеживания процессов 
        entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
  }), AuthModule, StocktakingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
