import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class catalogos1620133331192 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "catalogos",
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
            name: "cor",
            type: "varchar",
          },
          {
            name: "imagemCapa",
            type: "varchar",
          },
          {
            name: "imagemContracapa",
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
      await queryRunner.dropTable("catalogos");
  }
}
