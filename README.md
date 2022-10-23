# Nex AoD FC Discord Bot

[![GitHub Actions CI](https://github.com/microsoft/TypeScript/workflows/CI/badge.svg)](https://github.com/nexaod/discord/actions)
[![node version](https://img.shields.io/badge/node-v16.14.2-green)](https://nodejs.org/en/download/current/)
[![discord js](https://img.shields.io/badge/discord.js-v14.5.0-blue)](https://discord.js.org/#/)

This bot provides an easy way to update **Nex AoD FC** channels such as `#leaderboards` and `requirements` in a modern and structured style using Discord embedded messages. The advantage of this is that any administrator is able to use built in GitHub editing features, and through continuous integration, the bot is activated and updates channels and messages. The bot is serverless and leverages GitHub's built in Continuous Integration, [Actions](https://github.com/features/actions).

## Installation

No installation is required besides setting up a [GitHub Action](https://github.com/features/actions) for the channel you want to update.

1. Get the channel ID that you want to update.
2. Update corresponding TypeScript file with correct channel.
3. Create `.yml` GitHub Action
4. Commit and Push

## Support

<a href="https://discord.gg/Q6zMtwKEgV"><img src="https://discordapp.com/api/guilds/742114133117501570/widget.png?style=banner2" alt="Discord invite"></a>

For any bot support please raise an issue in our Discord, or message Fate.

© Nex AoD FC 2022
