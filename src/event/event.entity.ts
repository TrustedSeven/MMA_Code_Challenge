import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Fight } from '../fight/fight.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  date: Date;

  @OneToMany(() => Fight, (fight) => fight.event)
  fight: Fight[];
}
