import { DiscordModule } from '@discord-nestjs/core';
import { DynamicModule, Module, Provider } from '@nestjs/common';
import { DiscordClientModule } from '../clients/discord/discord.module';
import { HelpCommand } from './help/help.command';


@Module({})
export class CommandModule {
  static register(): DynamicModule {
    let commands: Provider[] = [
      HelpCommand,
    ];

    return {
      module: CommandModule,
      imports: [
        DiscordModule.forFeature(),
        DiscordClientModule,
      ],
      providers: commands,
      exports: [],
    };
  }
}
