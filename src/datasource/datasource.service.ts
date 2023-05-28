import { Injectable } from "@nestjs/common";
import { Cell } from "src/cell/cell.entity";
import { CellCategory } from "src/cell_category/cell_category.entity";
import { Client } from "src/client/client.entity";
import { Price } from "src/price/price.entity";

@Injectable()
export class DatasourceService{
    private cells: Cell[] = [];
    private clients: Client[] = [];
    private cellCategories: CellCategory[] = [];
    private price: Price[] = []

    getCell(): Cell[] {
        return this.cells;
    }

    getClient(): Client[] {
        return this.clients;
    }

    getCellCategory(): CellCategory[]{
        return this.cellCategories
    }

    getPrice(): Price[]{
        return this.price
    }
}