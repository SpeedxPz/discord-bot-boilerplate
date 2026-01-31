# Discord Bot Boilerplate

A production-ready Discord bot boilerplate built with NestJS and Discord.js, featuring voice capabilities, health checks, and a modular architecture.

## Features

- 🎯 **NestJS Framework** - Enterprise-grade architecture with dependency injection
- 🎵 **Voice Support** - Built-in voice channel capabilities with @discordjs/voice
- 🏥 **Health Checks** - Integrated health monitoring with @nestjs/terminus
- 📝 **Command System** - Slash commands using @discord-nestjs/core
- 🔄 **Event System** - Event-driven architecture with @nestjs/event-emitter
- 🐳 **Docker Ready** - Containerized deployment support
- 🧪 **Testing** - Unit and E2E tests with Jest
- 📊 **Web Dashboard** - Static file serving for bot management UI
- 🎨 **TypeScript** - Full type safety throughout the codebase

## Prerequisites

- Node.js 24.x or higher
- npm or yarn
- Discord Bot Token ([Get one here](https://discord.com/developers/applications))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/SpeedxPz/discord-bot-boilerplate.git
cd discord-bot-boilerplate
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
# Required
DISCORD_CLIENT_TOKEN=your_discord_bot_token_here


# Optional Configuration
LOG_LEVEL=LOG
PORT=3000
ALLOW_EVERYONE_FOR_DEFAULT_PERMS=false
```

## Usage

### Development

Start the bot in development mode with hot reload:
```bash
npm run start:dev
```

### Production

Build and run in production:
```bash
npm run build
npm run start:prod
```

### Docker

Build and run with Docker:
```bash
docker build -t discord-bot .
docker run -p 3000:3000 --env-file .env discord-bot
```

## Project Structure

```
src/
├── app.module.ts              # Main application module
├── main.ts                    # Application entry point
├── clients/
│   └── discord/               # Discord client services
│       ├── discord.config.service.ts
│       ├── discord.message.service.ts
│       ├── discord.module.ts
│       └── discord.voice.service.ts
├── commands/                  # Bot commands
│   ├── command.module.ts
│   └── help/
│       └── help.command.ts
├── health/                    # Health check endpoints
│   ├── health.controller.ts
│   └── indicators/
│       └── discord.indicator.ts
├── middleware/                # Custom middleware
├── models/                    # Data models
├── types/                     # TypeScript type definitions
└── utils/                     # Utility functions
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Build the project for production |
| `npm run start` | Start the bot |
| `npm run start:dev` | Start in development mode with watch |
| `npm run start:debug` | Start in debug mode |
| `npm run start:prod` | Start production build |
| `npm run lint` | Lint and fix code |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:cov` | Generate test coverage report |
| `npm run test:e2e` | Run end-to-end tests |

## Environment Variables

### Required

- `DISCORD_CLIENT_TOKEN` - Your Discord bot token

### Optional

- `LOG_LEVEL` - Logging level (ERROR, WARN, LOG, DEBUG, VERBOSE) - Default: LOG
- `PORT` - HTTP server port - Default: 3000
- `ALLOW_EVERYONE_FOR_DEFAULT_PERMS` - Allow @everyone role for commands - Default: false

## Adding Commands

Create a new command in `src/commands/`:

```typescript
import { Command, Handler, IA } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { CommandInteraction } from 'discord.js';

@Injectable()
@Command({
  name: 'mycommand',
  description: 'Description of your command',
})
export class MyCommand {
  @Handler()
  async handler(@IA() interaction: CommandInteraction): Promise<void> {
    await interaction.reply('Hello from my command!');
  }
}
```

Register the command in `src/commands/command.module.ts`.

## Health Checks

The bot exposes health check endpoints at:
- `http://localhost:3000/health` - Overall health status
- Discord connection status included via custom indicator

## Testing

Run the test suite:
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

- 📝 [Report an issue](https://github.com/SpeedxPz/discord-bot-boilerplate/issues/new/choose)
- 💬 [GitHub Discussions](https://github.com/SpeedxPz/discord-bot-boilerplate/discussions)
- 📖 [Documentation](https://github.com/SpeedxPz/discord-bot-boilerplate)

## Acknowledgments

- Built with [NestJS](https://nestjs.com/)
- Powered by [Discord.js](https://discord.js.org/)
- Discord integration via [@discord-nestjs/core](https://github.com/fjodor-rybakov/discord-nestjs)

---

Made with ❤️ by [SpeedxPz](https://github.com/SpeedxPz)
