import { Module } from '@nestjs/common';
import { StripeModule } from './app/stripe/stripe.module'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgDBConfig } from './config';

@Module({
  imports: [TypeOrmModule.forRoot(pgDBConfig), StripeModule],
})
export class AppModule {}
