import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Image } from './image.entity';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => Image, (image) => image.album)
  images: Image[] = [];
}

