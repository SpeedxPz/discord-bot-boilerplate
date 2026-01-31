export const Constants = {
  Metadata: {
    Version: {
      Major: 0,
      Minor: 2,
      Patch: 1,
      All: () =>
        `${Constants.Metadata.Version.Major}.${Constants.Metadata.Version.Minor}.${Constants.Metadata.Version.Patch}`,
    },
    ApplicationName: 'Discord Bot Boilerplate',
  },
  Links: {
    SourceCode: 'https://github.com/SpeedxPz/discord-bot-boilerplate/',
    Issues: 'https://github.com/SpeedxPz/discord-bot-boilerplate/issues/',
    ReportIssue:
      'https://github.com/SpeedxPz/discord-bot-boilerplate/issues/new/choose',
    BugReport: (title) =>
      new URL(
        `https://github.com/SpeedxPz/discord-bot-boilerplate/issues/new?assignees=&labels=&template=bug_report.md&title=${title}`,
      ),
    ReleasesPage:
      'https://github.com/SpeedxPz/discord-bot-boilerplate/releases',
    Wiki: {
      DisableNotifications:
        'https://github.com/SpeedxPz/discord-bot-boilerplate/wiki/%F0%9F%93%A2-Update-Notifications',
    },
    Api: {
      GetLatestRelease:
        'https://api.github.com/repos/SpeedxPz/discord-bot-boilerplate/releases/latest',
    },
  },
  Design: {
    InvisibleSpace: '\u1CBC',
    Icons: {
      JellyfinLogo:
        'https://raw.githubusercontent.com/SpeedxPz/discord-bot-boilerplate/master/images/icons/jellyfin-icon-squared.png',
      SuccessIcon:
        'https://raw.githubusercontent.com/SpeedxPz/discord-bot-boilerplate/master/images/icons/circle-check.png',
      ErrorIcon:
        'https://raw.githubusercontent.com/SpeedxPz/discord-bot-boilerplate/master/images/icons/alert-circle.png',
    },
  },
};
