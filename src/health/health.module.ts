import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { DiscordHealthIndicator } from './indicators/discord.indicator';

@Module({
  imports: [TerminusModule, DiscordModule.forFeature()],
  controllers: [HealthController],
  providers: [DiscordHealthIndicator],
})
export class HealthModule {}
