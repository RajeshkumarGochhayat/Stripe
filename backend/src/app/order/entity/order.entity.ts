// order.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('st_order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  amount: number;

  @Column()
  status: string;

  @Column({ nullable: true })
  sessionId?: string;

  @CreateDateColumn()
  createdAt: Date;
}
