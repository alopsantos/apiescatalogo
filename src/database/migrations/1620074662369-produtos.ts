import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class produtos1620074662369 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "produtos",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "descricao",
            type: "varchar",
          },
          {
            name: "composicao",
            type: "varchar",
          },
          {
            name: "referencia",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "valor",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tamanhos",
            type: "varchar",
          },
          {
            name: "imagens",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "update_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("produtos");
  }
}
