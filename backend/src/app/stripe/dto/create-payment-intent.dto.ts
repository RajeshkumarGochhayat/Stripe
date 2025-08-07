import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePaymentIntentDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
