import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("produtos")
export default class Produto {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  composicao: string;

  @Column()
  referencia: string;

  @Column()
  valor: string;

  @Column()
  tamanhos: string;

  @Column()
  imagens: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
