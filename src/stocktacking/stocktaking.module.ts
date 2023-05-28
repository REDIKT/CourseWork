import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cell } from "src/cell/cell.entity";
import { DatasourceModule } from "src/datasource/datasource.module";

@Module({
    controllers: [],
    providers: [],
    imports: [DatasourceModule, TypeOrmModule.forFeature([Cell])]
  })
  export class StocktakingModule {}