import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entity/order.entity';


@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) { }

  async createOrder(productName: string, amount: number): Promise<Order> {
    const order = this.orderRepository.create({
      productName,
      amount,
      status: 'pending',
    });
    return this.orderRepository.save(order);
  }

  async updateSessionId(orderId: number, sessionId: string): Promise<Order> {
    const order = await this.orderRepository.findOne({ where: { id: orderId } });
    if (!order) {
      throw new NotFoundException('Order not found');
    }

    order.sessionId = sessionId;

    return (await this.orderRepository.save(order));
  }

  async updateOrderStatus(orderId: number, status: string, sessionId: string): Promise<Order> {
    const order = await this.orderRepository.findOne({ where: { id: orderId, sessionId } });
    if (!order) {
      throw new NotFoundException('Order not found');
    }

    order.status = status;

    return (await this.orderRepository.save(order));
  }

  async getOrderById(orderId: number): Promise<Order> {
    const order = await this.orderRepository.findOne({ where: { id: orderId } });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }
}
