import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', length: 30 })
  Date: Date;

  @Column({ type: 'varchar', length: 15 })
  Feedback: string;

  @Column({
    type: 'enum',
    enum: [
      'Home',
      'About',
      'Projects',
      'Constellation Website',
      'Game Jam #14',
    ],
  })
  About: string;
}
