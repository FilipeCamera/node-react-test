import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ nullable: false })
  name!: string;

  @Column({ length: 11, nullable: false })
  cpf!: string;

  @Column({ nullable: false })
  birthDate!: Date;

  @Column({ length: 8, nullable: false })
  cep!: string;

  @Column({ nullable: false })
  address!: string;

  @Column({ nullable: false })
  city!: string;

  @Column({ length: 2, nullable: false })
  uf!: string;

  @CreateDateColumn({ name: "created_at", nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", nullable: false })
  updatedAt!: Date;
}
