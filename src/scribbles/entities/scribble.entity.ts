import {
  Entity,
  ObjectIdColumn, 
  Column,
  ObjectId,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Scribbles {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: 0})
  likes: number;

  @Column({ default: 0 })
  dislikes: 0;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

};