import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("brands")
export default class Brand {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  instagram: string;

  @Column()
  logo: string;

  @Column()
  loja: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}