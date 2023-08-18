// src/entities/todo.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Fight } from '../fight/fight.entity';

@Entity()
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  wins: Number;

  @Column()
  losses: Number;

  @Column()
  knockouts: Number;

  @Column()
  submission: Number;

  @Column()
  nationality: string;

  @Column()
  fight_history: string; 


  @OneToMany(() => Fight, (fight) => fight.fighter1)
  fightsAsFighter1: Fight[];

  @OneToMany(() => Fight, (fight) => fight.fighter2)
  fightsAsFighter2: Fight[];
}