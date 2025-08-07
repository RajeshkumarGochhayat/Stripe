import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { config } from 'dotenv';
import { OrderService } from '../order/order.service';
config();

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(private readonly orderService: OrderService,) {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      throw new Error('Missing STRIPE_SECRET_KEY in environment variables');
    }

    this.stripe = new Stripe(stripeKey, {
      apiVersion: '2024-04-10' as any,
    });
  }

  async createCheckoutSession(product: any) {

    //Create order with order ID
    const order = await this.orderService.createOrder(product.name, product.amount);

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/stripe/verify/{CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/stripe/verify/{CHECKOUT_SESSION_ID}',
      metadata: {
        orderId: String(order.id),
      },
    });
    await this.orderService.updateSessionId(order.id, session.id);
    return { id: session.id };
  }

  async verifySession(sessionId: string) {
    // Optional delay to give Stripe time to update session status
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const session = await this.stripe.checkout.sessions.retrieve(sessionId);
    const orderId = session.metadata?.orderId;
    
    if (!orderId) {
      throw new Error('Order ID not found in Stripe session metadata');
    }
    if (session.payment_status === 'paid') {
      await this.orderService.updateOrderStatus(+orderId, 'paid', sessionId);
      return { url: 'http://localhost:5173/success' };
    } else {
      await this.orderService.updateOrderStatus(+orderId, 'failed', sessionId);
      return { url: 'http://localhost:5173/cancel' };
    }
  }

}