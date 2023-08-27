import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  content: string;
}
