import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Album } from './album.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url!: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  order!: number;

  @ManyToOne(() => Album, (album) => album.images, { onDelete: 'CASCADE' })
  album!: Album;
}