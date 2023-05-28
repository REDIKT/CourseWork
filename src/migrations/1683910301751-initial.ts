import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1683910301751 implements MigrationInterface {
    name = 'Initial1683910301751'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cell" DROP CONSTRAINT "cell_client"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "client_id_seq" OWNED BY "client"."id"`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "id" SET DEFAULT nextval('"client_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "email" character varying`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "phone_number" character varying`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" ADD CONSTRAINT "PK_6f34717c251843e5ca32fc1b2b8" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "clientId"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "clientId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "categoryId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "capacity"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "capacity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "price_pkey"`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "categoryId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "discount" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "category_pkey"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" ADD CONSTRAINT "FK_eee91ee36e844a3afb53dcb6c69" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cell" ADD CONSTRAINT "FK_71c39e3689a01c5305f2eb675ab" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "FK_7161dac2e593d45480dc88e8c1d" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "FK_7161dac2e593d45480dc88e8c1d"`);
        await queryRunner.query(`ALTER TABLE "cell" DROP CONSTRAINT "FK_71c39e3689a01c5305f2eb675ab"`);
        await queryRunner.query(`ALTER TABLE "cell" DROP CONSTRAINT "FK_eee91ee36e844a3afb53dcb6c69"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "category_pkey" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "price" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "discount" bigint`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "categoryId" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4"`);
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "price_pkey" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "capacity"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "capacity" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "categoryId" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "clientId"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "clientId" bigint`);
        await queryRunner.query(`ALTER TABLE "cell" DROP CONSTRAINT "PK_6f34717c251843e5ca32fc1b2b8"`);
        await queryRunner.query(`ALTER TABLE "cell" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD "id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "phone_number" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "email" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "name" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "client_id_seq"`);
        await queryRunner.query(`ALTER TABLE "cell" ADD CONSTRAINT "cell_client" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
