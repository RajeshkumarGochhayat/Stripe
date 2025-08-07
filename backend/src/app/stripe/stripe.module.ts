import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { OrderModule } from '../order/order.module';

@Module({
  imports: [OrderModule], 
  controllers: [StripeController],
  providers: [StripeService],
})
export class StripeModule {}
