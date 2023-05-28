import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1683830616598 implements MigrationInterface {
    name = 'Initial1683830616598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client_cell" ("client_id" integer NOT NULL, "cell_id" integer NOT NULL, "cell_id" integer NOT NULL, CONSTRAINT "PK_48e7b3adcab0c1ec4a1c0cbda15" PRIMARY KEY ("client_id", "cell_id", "cell_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e66c15c0a969c71b3c43f8e0cb" ON "client_cell" ("client_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_511323c6d1c06d8b5f78047831" ON "client_cell" ("cell_id", "cell_id") `);
        await queryRunner.query(`CREATE TABLE "cell_client" ("cell_id" integer NOT NULL, "cell_id" integer NOT NULL, "client_id" integer NOT NULL, CONSTRAINT "PK_1922dc51213f6026647049838b9" PRIMARY KEY ("cell_id", "cell_id", "client_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_11d4f223b02878eb5845153dfa" ON "cell_client" ("cell_id", "cell_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_26e32fcc1dbd7983d262cfed53" ON "cell_client" ("client_id") `);
        await queryRunner.query(`CREATE TABLE "cell_category" ("cell_id" integer NOT NULL, "cell_id" integer NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_b5e2d1f029dbf8e658043a606ff" PRIMARY KEY ("cell_id", "cell_id", "category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f0469e33eba9237101260d13fe" ON "cell_category" ("cell_id", "cell_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_77ad3b679e843ecfe549843ff9" ON "cell_category" ("category_id") `);
        await queryRunner.query(`CREATE TABLE "category_cell" ("category_id" integer NOT NULL, "cell_id" integer NOT NULL, "cell_id" integer NOT NULL, CONSTRAINT "PK_1e02a06ad39804689ef2986f9a2" PRIMARY KEY ("category_id", "cell_id", "cell_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4125c0031b02fb7fb446635885" ON "category_cell" ("category_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_7ec8fa042e25bfbab31e071d12" ON "category_cell" ("cell_id", "cell_id") `);
        await queryRunner.query(`CREATE TABLE "category_price" ("category_id" integer NOT NULL, "price_id" integer NOT NULL, CONSTRAINT "PK_907c6cb08589a2c765e88051f28" PRIMARY KEY ("category_id", "price_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_80cb13cc4bdae9370afb35b305" ON "category_price" ("category_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9b56293cb7a98ac90dbda27f68" ON "category_price" ("price_id") `);
        await queryRunner.query(`CREATE TABLE "price_category" ("price_id" integer NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_eb40c7fe5f57f3e1abf3a8197b0" PRIMARY KEY ("price_id", "category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d511d7336e1451b25cf9b2e6d9" ON "price_category" ("price_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_0b4f07cbf2b46d6b071c93ad57" ON "price_category" ("category_id") `);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "client_pkey"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "phone_number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP CONSTRAINT "cell_pkey"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD CONSTRAINT "cell_pkey" PRIMARY KEY ("storage_id")`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP CONSTRAINT "cell_pkey"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD CONSTRAINT "cell_pkey" PRIMARY KEY ("storage_id", "id")`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "customer_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "category_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP CONSTRAINT "cell_pkey"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD CONSTRAINT "PK_6f34717c251843e5ca32fc1b2b8" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "storage_id"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "storage_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP CONSTRAINT "PK_6f34717c251843e5ca32fc1b2b8"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD CONSTRAINT "PK_15d17603f659491f42ca9a2ae66" PRIMARY KEY ("id", "storage_id")`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "capacity"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "capacity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "category_pkey"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "price_pkey"`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "category_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "discount" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client_cell" ADD CONSTRAINT "FK_e66c15c0a969c71b3c43f8e0cb6" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "client_cell" ADD CONSTRAINT "FK_511323c6d1c06d8b5f78047831b" FOREIGN KEY ("cell_id", "cell_id") REFERENCES "cell"("id","storage_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cell_client" ADD CONSTRAINT "FK_11d4f223b02878eb5845153dfa4" FOREIGN KEY ("cell_id", "cell_id") REFERENCES "cell"("id","storage_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cell_client" ADD CONSTRAINT "FK_26e32fcc1dbd7983d262cfed537" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cell_category" ADD CONSTRAINT "FK_f0469e33eba9237101260d13fe7" FOREIGN KEY ("cell_id", "cell_id") REFERENCES "cell"("id","storage_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cell_category" ADD CONSTRAINT "FK_77ad3b679e843ecfe549843ff91" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_cell" ADD CONSTRAINT "FK_4125c0031b02fb7fb4466358858" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_cell" ADD CONSTRAINT "FK_7ec8fa042e25bfbab31e071d128" FOREIGN KEY ("cell_id", "cell_id") REFERENCES "cell"("id","storage_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_price" ADD CONSTRAINT "FK_80cb13cc4bdae9370afb35b3052" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_price" ADD CONSTRAINT "FK_9b56293cb7a98ac90dbda27f68a" FOREIGN KEY ("price_id") REFERENCES "price"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "price_category" ADD CONSTRAINT "FK_d511d7336e1451b25cf9b2e6d90" FOREIGN KEY ("price_id") REFERENCES "price"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "price_category" ADD CONSTRAINT "FK_0b4f07cbf2b46d6b071c93ad575" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "price_category" DROP CONSTRAINT "FK_0b4f07cbf2b46d6b071c93ad575"`);
        await queryRunner.query(`ALTER TABLE "price_category" DROP CONSTRAINT "FK_d511d7336e1451b25cf9b2e6d90"`);
        await queryRunner.query(`ALTER TABLE "category_price" DROP CONSTRAINT "FK_9b56293cb7a98ac90dbda27f68a"`);
        await queryRunner.query(`ALTER TABLE "category_price" DROP CONSTRAINT "FK_80cb13cc4bdae9370afb35b3052"`);
        await queryRunner.query(`ALTER TABLE "category_cell" DROP CONSTRAINT "FK_7ec8fa042e25bfbab31e071d128"`);
        await queryRunner.query(`ALTER TABLE "category_cell" DROP CONSTRAINT "FK_4125c0031b02fb7fb4466358858"`);
        await queryRunner.query(`ALTER TABLE "cell_category" DROP CONSTRAINT "FK_77ad3b679e843ecfe549843ff91"`);
        await queryRunner.query(`ALTER TABLE "cell_category" DROP CONSTRAINT "FK_f0469e33eba9237101260d13fe7"`);
        await queryRunner.query(`ALTER TABLE "cell_client" DROP CONSTRAINT "FK_26e32fcc1dbd7983d262cfed537"`);
        await queryRunner.query(`ALTER TABLE "cell_client" DROP CONSTRAINT "FK_11d4f223b02878eb5845153dfa4"`);
        await queryRunner.query(`ALTER TABLE "client_cell" DROP CONSTRAINT "FK_511323c6d1c06d8b5f78047831b"`);
        await queryRunner.query(`ALTER TABLE "client_cell" DROP CONSTRAINT "FK_e66c15c0a969c71b3c43f8e0cb6"`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "price" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "discount" bigint`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "category_id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4"`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "price_pkey" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "category_pkey" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "capacity"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "capacity" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP CONSTRAINT "PK_15d17603f659491f42ca9a2ae66"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD CONSTRAINT "PK_6f34717c251843e5ca32fc1b2b8" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "storage_id"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "storage_id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP CONSTRAINT "PK_6f34717c251843e5ca32fc1b2b8"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD CONSTRAINT "cell_pkey" PRIMARY KEY ("storage_id", "id")`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "category_id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "customer_id" bigint`);
        await queryRunner.query(`ALTER TABLE "cell" DROP CONSTRAINT "cell_pkey"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD CONSTRAINT "cell_pkey" PRIMARY KEY ("storage_id")`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP CONSTRAINT "cell_pkey"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD CONSTRAINT "cell_pkey" PRIMARY KEY ("id", "storage_id")`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "phone_number" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "email" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "name" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "PK_96da49381769303a6515a8785c7"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "client_pkey" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0b4f07cbf2b46d6b071c93ad57"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d511d7336e1451b25cf9b2e6d9"`);
        await queryRunner.query(`DROP TABLE "price_category"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9b56293cb7a98ac90dbda27f68"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_80cb13cc4bdae9370afb35b305"`);
        await queryRunner.query(`DROP TABLE "category_price"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7ec8fa042e25bfbab31e071d12"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4125c0031b02fb7fb446635885"`);
        await queryRunner.query(`DROP TABLE "category_cell"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_77ad3b679e843ecfe549843ff9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f0469e33eba9237101260d13fe"`);
        await queryRunner.query(`DROP TABLE "cell_category"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_26e32fcc1dbd7983d262cfed53"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_11d4f223b02878eb5845153dfa"`);
        await queryRunner.query(`DROP TABLE "cell_client"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_511323c6d1c06d8b5f78047831"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e66c15c0a969c71b3c43f8e0cb"`);
        await queryRunner.query(`DROP TABLE "client_cell"`);
    }

}
