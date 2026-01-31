import { Command, Handler, IA } from '@discord-nestjs/core';

import { Injectable } from '@nestjs/common';

import { CommandInteraction } from 'discord.js';
import { DiscordMessageService } from 'src/clients/discord/discord.message.service';

import { defaultMemberPermissions } from 'src/utils/environment';

@Injectable()
@Command({
  name: 'help',
  description: 'Get help if you&apos;re having problems with this bot',
  defaultMemberPermissions: defaultMemberPermissions,
})
export class HelpCommand {
  constructor(private readonly discordMessageService: DiscordMessageService) {}

  @Handler()
  async handler(@IA() interaction: CommandInteraction): Promise<void> {
    await interaction.reply({
      embeds: [
        this.discordMessageService.buildMessage({
          title: 'TakumiPro Discord Bot Template',
          description:
            'Boilerplate to getting started with discord bot',
          authorUrl: 'https://github.com/SpeedxPz/discord-bot-boilerplate',
          mixin(embedBuilder) {
            return embedBuilder.addFields([
              {
                name: 'Report an issue',
                value:
                  'https://github.com/SpeedxPz/discord-bot-boilerplate/issues/new/choose',
                inline: true,
              },
              {
                name: 'Source code',
                value: 'https://github.com/SpeedxPz/discord-bot-boilerplate',
                inline: true,
              },
            ]);
          },
        }),
      ],
    });
  }
}
