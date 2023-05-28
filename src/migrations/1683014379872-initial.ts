import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1683014379872 implements MigrationInterface {
    name = 'Initial1683014379872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cell" ("id" SERIAL NOT NULL, "customer_id" integer NOT NULL, "category_id" integer NOT NULL, "storage_id" integer NOT NULL, "capacity" integer NOT NULL, "engaged" boolean NOT NULL, CONSTRAINT "PK_6f34717c251843e5ca32fc1b2b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "price" ("id" SERIAL NOT NULL, "category_id" integer NOT NULL, "discount" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client_cell" ("client_id" integer NOT NULL, "cell_id" integer NOT NULL, CONSTRAINT "PK_431019781e7c06fe500d161a15d" PRIMARY KEY ("client_id", "cell_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e66c15c0a969c71b3c43f8e0cb" ON "client_cell" ("client_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_b78cf232786766096931b78aa0" ON "client_cell" ("cell_id") `);
        await queryRunner.query(`CREATE TABLE "cell_client" ("cell_id" integer NOT NULL, "client_id" integer NOT NULL, CONSTRAINT "PK_668d691754a7f14874a248e48a9" PRIMARY KEY ("cell_id", "client_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_934f55c2bf3b56a67909f27d76" ON "cell_client" ("cell_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_26e32fcc1dbd7983d262cfed53" ON "cell_client" ("client_id") `);
        await queryRunner.query(`CREATE TABLE "cell_category" ("cell_id" integer NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_bab4a2edb3259bf87b77d204461" PRIMARY KEY ("cell_id", "category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fb5737062efd668043928dc70e" ON "cell_category" ("cell_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_77ad3b679e843ecfe549843ff9" ON "cell_category" ("category_id") `);
        await queryRunner.query(`CREATE TABLE "price_category" ("price_id" integer NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_eb40c7fe5f57f3e1abf3a8197b0" PRIMARY KEY ("price_id", "category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d511d7336e1451b25cf9b2e6d9" ON "price_category" ("price_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_0b4f07cbf2b46d6b071c93ad57" ON "price_category" ("category_id") `);
        await queryRunner.query(`CREATE TABLE "category_cell" ("category_id" integer NOT NULL, "cell_id" integer NOT NULL, CONSTRAINT "PK_4f5bb6d13243591740d80ee8981" PRIMARY KEY ("category_id", "cell_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4125c0031b02fb7fb446635885" ON "category_cell" ("category_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_797172e37b016558710f227819" ON "category_cell" ("cell_id") `);
        await queryRunner.query(`CREATE TABLE "category_price" ("category_id" integer NOT NULL, "price_id" integer NOT NULL, CONSTRAINT "PK_907c6cb08589a2c765e88051f28" PRIMARY KEY ("category_id", "price_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_80cb13cc4bdae9370afb35b305" ON "category_price" ("category_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9b56293cb7a98ac90dbda27f68" ON "category_price" ("price_id") `);
        await queryRunner.query(`ALTER TABLE "client_cell" ADD CONSTRAINT "FK_e66c15c0a969c71b3c43f8e0cb6" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "client_cell" ADD CONSTRAINT "FK_b78cf232786766096931b78aa06" FOREIGN KEY ("cell_id") REFERENCES "cell"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cell_client" ADD CONSTRAINT "FK_934f55c2bf3b56a67909f27d765" FOREIGN KEY ("cell_id") REFERENCES "cell"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cell_client" ADD CONSTRAINT "FK_26e32fcc1dbd7983d262cfed537" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cell_category" ADD CONSTRAINT "FK_fb5737062efd668043928dc70eb" FOREIGN KEY ("cell_id") REFERENCES "cell"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cell_category" ADD CONSTRAINT "FK_77ad3b679e843ecfe549843ff91" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "price_category" ADD CONSTRAINT "FK_d511d7336e1451b25cf9b2e6d90" FOREIGN KEY ("price_id") REFERENCES "price"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "price_category" ADD CONSTRAINT "FK_0b4f07cbf2b46d6b071c93ad575" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_cell" ADD CONSTRAINT "FK_4125c0031b02fb7fb4466358858" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_cell" ADD CONSTRAINT "FK_797172e37b016558710f2278199" FOREIGN KEY ("cell_id") REFERENCES "cell"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_price" ADD CONSTRAINT "FK_80cb13cc4bdae9370afb35b3052" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_price" ADD CONSTRAINT "FK_9b56293cb7a98ac90dbda27f68a" FOREIGN KEY ("price_id") REFERENCES "price"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_price" DROP CONSTRAINT "FK_9b56293cb7a98ac90dbda27f68a"`);
        await queryRunner.query(`ALTER TABLE "category_price" DROP CONSTRAINT "FK_80cb13cc4bdae9370afb35b3052"`);
        await queryRunner.query(`ALTER TABLE "category_cell" DROP CONSTRAINT "FK_797172e37b016558710f2278199"`);
        await queryRunner.query(`ALTER TABLE "category_cell" DROP CONSTRAINT "FK_4125c0031b02fb7fb4466358858"`);
        await queryRunner.query(`ALTER TABLE "price_category" DROP CONSTRAINT "FK_0b4f07cbf2b46d6b071c93ad575"`);
        await queryRunner.query(`ALTER TABLE "price_category" DROP CONSTRAINT "FK_d511d7336e1451b25cf9b2e6d90"`);
        await queryRunner.query(`ALTER TABLE "cell_category" DROP CONSTRAINT "FK_77ad3b679e843ecfe549843ff91"`);
        await queryRunner.query(`ALTER TABLE "cell_category" DROP CONSTRAINT "FK_fb5737062efd668043928dc70eb"`);
        await queryRunner.query(`ALTER TABLE "cell_client" DROP CONSTRAINT "FK_26e32fcc1dbd7983d262cfed537"`);
        await queryRunner.query(`ALTER TABLE "cell_client" DROP CONSTRAINT "FK_934f55c2bf3b56a67909f27d765"`);
        await queryRunner.query(`ALTER TABLE "client_cell" DROP CONSTRAINT "FK_b78cf232786766096931b78aa06"`);
        await queryRunner.query(`ALTER TABLE "client_cell" DROP CONSTRAINT "FK_e66c15c0a969c71b3c43f8e0cb6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9b56293cb7a98ac90dbda27f68"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_80cb13cc4bdae9370afb35b305"`);
        await queryRunner.query(`DROP TABLE "category_price"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_797172e37b016558710f227819"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4125c0031b02fb7fb446635885"`);
        await queryRunner.query(`DROP TABLE "category_cell"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0b4f07cbf2b46d6b071c93ad57"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d511d7336e1451b25cf9b2e6d9"`);
        await queryRunner.query(`DROP TABLE "price_category"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_77ad3b679e843ecfe549843ff9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fb5737062efd668043928dc70e"`);
        await queryRunner.query(`DROP TABLE "cell_category"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_26e32fcc1dbd7983d262cfed53"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_934f55c2bf3b56a67909f27d76"`);
        await queryRunner.query(`DROP TABLE "cell_client"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b78cf232786766096931b78aa0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e66c15c0a969c71b3c43f8e0cb"`);
        await queryRunner.query(`DROP TABLE "client_cell"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "price"`);
        await queryRunner.query(`DROP TABLE "cell"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
