import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("catalogos")
export default class Catalogo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;
  
  @Column()
  cor: string;

  @Column()
  imagemCapa: string;

  @Column()
  imagemContracapa: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}