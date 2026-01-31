import { Controller, Get, Injectable } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { DiscordHealthIndicator } from './indicators/discord.indicator';

@Injectable()
@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly discordIndicator: DiscordHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  async healthCheck() {
    return this.health.check([
      () => this.discordIndicator.isHealthy('discord'),
    ]);
  }
}
