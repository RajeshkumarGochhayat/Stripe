// create-order.dto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateDateColumn } from 'typeorm';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  status: string;
}
