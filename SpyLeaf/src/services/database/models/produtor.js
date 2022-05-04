import { EntitySchema } from 'typeorm'

const Produtor = new EntitySchema({
    name: 'Produtor',
    tableName: 'produtor',
    columns: {
        prd_id: {
            type: 'integer',
            primary: true,
            generated: true
        },
        prd_nome: {
            type: 'varchar',
            nullable: false
        },
        prd_email: {
            type: 'varchar',
            nullable: false
        },
        prd_senha: {
            type: 'varchar',
            nullable: false,
            length: 100
        }
    }
})
export default Produtor