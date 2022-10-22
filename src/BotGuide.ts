import { Client, TextChannel, ButtonBuilder, ButtonStyle, ActionRowBuilder } from "discord.js";
import { Colours, Channels, createEmbed } from "./Utils";

const token = process.env.DISCORD_TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

const { GMAIL_USERNAME, GMAIL_PASSWORD, HUB_USERNAME, HUB_PASSWORD } = process.env

client.login(token);

const gmail = `
> Use these credentials for GitHub 2FA and Rotation Preset Document.\n
**Username:** || \`${GMAIL_USERNAME}\` ||
**Password:** || \`${GMAIL_PASSWORD}\` ||
`;

const gmailEmbed = {
    color: Colours.red,
    description: gmail,
    thumbnail: {
        url: 'https://media.discordapp.net/attachments/1027186342620299315/1033230768903815228/Gmail_icon_2020.svg.png',
    },
};

const github = `
> Use these credentials for any modifications of channel messages within Discord.\n
**Username:** || \`${HUB_USERNAME}\` ||
**Password:** || \`${HUB_PASSWORD}\` ||
`;

const editInstructions = `
1. Log in to GitHub.
2. Find the corresponding page you want to edit in the list below.
3. Click the :pencil2: icon shown below and make the required edits.
4. Click the **Commit Changes** Button when done.\n
> Within a few seconds the bot will auto update the corresponding channel with the required changes.
`;

const editPencil = 'https://cdn.discordapp.com/attachments/1027186342620299315/1033235509591408650/Discord_2momevsJrm.png';

const commitChangesButton = 'https://cdn.discordapp.com/attachments/1027186342620299315/1033235867831124000/chrome_HPl1bnVh2m.png';

const githubEmbed = {
    color: Colours.darkgrey,
    description: github,
    thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1027186342620299315/1033232919600316506/GitHub-Mark-Light-64px.png',
    },
};

const GmailActionRow = new ActionRowBuilder<ButtonBuilder>().setComponents(new ButtonBuilder()
    .setURL('https://mail.google.com/mail/u/0/')
    .setLabel('Log In')
    .setStyle(ButtonStyle.Link))

const GitHubActionRow = new ActionRowBuilder<ButtonBuilder>().setComponents(new ButtonBuilder()
    .setURL('https://github.com/login')
    .setLabel('Log In')
    .setStyle(ButtonStyle.Link))

const everythingAboutNexAodEmbed = {
    color: Colours.lightblue,
    description: `> Some channel messages contain multiple files. Editing any will trigger a bot update.`,
    fields: [
        {
            name: 'Rules',
            value: '[Link](https://github.com/nexaod/discord/blob/main/src/data/Rules.ts)',
            inline: true
        },
        {
            name: 'Ranking System',
            value: '[Link](https://github.com/nexaod/discord/tree/main/src/data/ranks)',
            inline: true
        },
        {
            name: 'Gear Requirements',
            value: '[Link](https://github.com/nexaod/discord/blob/main/src/data/Gear.ts)',
            inline: true
        },
        {
            name: 'Expectations',
            value: '[Link](https://github.com/nexaod/discord/blob/main/src/data/Expectations.ts)',
            inline: true
        },
        {
            name: 'Additional Info',
            value: '[Link](https://github.com/nexaod/discord/blob/main/src/data/AdditionalInfo.ts)',
            inline: true
        },
        {
            name: 'Leaderboard',
            value: '[Link](https://github.com/nexaod/discord/tree/main/src/data/leaderboards)',
            inline: true
        },
    ]
};

const guidesAndRotations = {
    color: Colours.lightblue,
    fields: [
        {
            name: 'Hybrid',
            value: '[Link](https://github.com/nexaod/discord/tree/main/src/data/guides/hybrid)',
            inline: true
        },
        {
            name: 'Magic',
            value: '[Link](https://github.com/nexaod/discord/tree/main/src/data/guides/magic)',
            inline: true
        },
        {
            name: 'Ranged',
            value: '[Link](https://github.com/nexaod/discord/tree/main/src/data/guides/ranged)',
            inline: true
        },
        {
            name: 'Other',
            value: '[Link](https://github.com/nexaod/discord/blob/main/src/data/guides/Other.ts)',
            inline: true
        },
        {
            name: 'Preset Generator',
            value: '[Link](https://docs.google.com/spreadsheets/d/1c2B35ofwdMXzcei1CWX3lOowCBf8XJP0nbaQJQ4SZ6U/edit#gid=907504611)',
            inline: true
        },
    ]
};


client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    client.channels.fetch(Channels.botGuide)
        .then(async channel => {
            await (channel as TextChannel).bulkDelete(100)
            await (channel as TextChannel).send('> __**Gmail Credentials**__');
            await (channel as TextChannel).send({
                embeds: [gmailEmbed],
                components: [GmailActionRow]
            });
            await (channel as TextChannel).send('> __**GitHub Credentials**__');
            await (channel as TextChannel).send({
                embeds: [githubEmbed],
                components: [GitHubActionRow]
            });
            await (channel as TextChannel).send('> __**Editing Instructions**__');
            await (channel as TextChannel).send({ embeds: [createEmbed(editInstructions, Colours.gold)] });
            await (channel as TextChannel).send(editPencil);
            await (channel as TextChannel).send(commitChangesButton);
            await (channel as TextChannel).send('> __**Everything About Nex AoD**__');
            await (channel as TextChannel).send({ embeds: [everythingAboutNexAodEmbed] });
            await (channel as TextChannel).send('> __**Guides and Other**__');
            await (channel as TextChannel).send({ embeds: [guidesAndRotations] });
            await process.exit(0)

        }).catch(error => console.error);

    console.log(`${client.user.username} is online`);
});