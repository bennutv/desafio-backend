import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class laudo1661722516229 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"laudo",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"codigo_amostra",
                        type:"varchar"
                    },
                    {
                        name:"resultado",
                        type:"varchar"
                    },
                  
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("laudo");
    }

}
