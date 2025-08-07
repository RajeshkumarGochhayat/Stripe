import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) { }

  @Post('create-checkout-session')
  createCheckoutSession(@Body() body: any) {
    return this.stripeService.createCheckoutSession(body.product);
  }

  @Get('verify/:sessionId')
  @Redirect()
  async verify(@Param('sessionId') sessionId: string) {
    return this.stripeService.verifySession(sessionId); // returns { url: '...' }
  }
}
