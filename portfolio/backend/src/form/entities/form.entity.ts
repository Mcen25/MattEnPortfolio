import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  Date: Date;

  @Column({ default: 'No feedback givens'})
  Feedback: string;

  @Column({
    default: 'No category selected'
  })
  About: string;
}
