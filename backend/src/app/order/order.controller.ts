import { Controller, Post, Body, Param, Patch, Get } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }
}
