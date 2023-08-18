import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Event } from '../event/event.entity';
import { Fighter } from '../fighters/fighters.entity';

@Entity()
export class Fight {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, (event) => event.fight)
  event: Event;

  @ManyToOne(() => Fighter, (fighter) => fighter.fightsAsFighter1)
  fighter1: Fighter;

  @ManyToOne(() => Fighter, (fighter) => fighter.fightsAsFighter2)
  fighter2: Fighter;

  @Column()
  result: string;

  // ... other properties
}
