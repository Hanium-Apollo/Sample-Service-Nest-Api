import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  description: string;
}
