import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ nullable: false })
  title!: string;

  @Column({ length: 11, nullable: false })
  author!: string;

  @Column({ nullable: false })
  isbn!: Date;

  @Column({ length: 8, nullable: false })
  copyCode!: string;

  @CreateDateColumn({ name: "created_at", nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", nullable: false })
  updatedAt!: Date;
}
