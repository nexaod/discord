import { Client, TextChannel, Message } from "discord.js";
import { Colours, Channels, createEmbed } from "./Utils";
import { generalRules, behavioural, reporting, teamForming, splitting, deaths, gems, admin } from "./data/Rules";
const token = process.env.DISCORD_TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

const RulesObject: any = {
    general: {
        title: '> __**General Rules**__',
        toc: 'General',
        embed: createEmbed(generalRules, Colours.gold)
    },
    behavioural: {
        title: '> __**Behavioural Rules**__',
        toc: 'Behavioural',
        embed: createEmbed(behavioural, Colours.gold)
    },
    reporting: {
        title: '> __**Reporting Players**__',
        toc: 'Reports',
        embed: createEmbed(reporting, Colours.red)
    },
    teamForming: {
        title: '> __**Team Forming**__',
        toc: 'Team Forming',
        embed: createEmbed(teamForming, Colours.gold)
    },
    splitting: {
        title: '> __**Splitting**__',
        toc: 'Splitting',
        embed: createEmbed(splitting, Colours.gold)
    },
    deaths: {
        title: '> __**Deaths**__',
        toc: 'Deaths',
        embed: createEmbed(deaths, Colours.gold)
    },
    gems: {
        title: '> __**Challenge Gems**__',
        toc: 'Gemming',
        embed: createEmbed(gems, Colours.gold)
    },
    admin: {
        title: '> __**Administration Team**__',
        toc: 'Administration Team',
        embed: createEmbed(admin, Colours.gold)
    }
}

client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    client.channels.fetch(Channels.rules)
        .then(async channel => {
            const tableOfContents: any = {
                color: Colours.lightblue,
                title: 'Table of Contents'
            };
            const content: any = [];
            const createTableOfContentsItem = (message: Message, name: string) => {
                content.push(
                    {
                        name: name,
                        value: `[Link](${message.url})`,
                        inline: true,
                    }
                )
            }
            await (channel as TextChannel).bulkDelete(100)
            for (let embed in RulesObject) {
                await (channel as TextChannel).send(RulesObject[embed].title).then(message => {
                    createTableOfContentsItem(message, RulesObject[embed].toc);
                });
                await (channel as TextChannel).send({ embeds: [RulesObject[embed].embed] });
            }
            tableOfContents.fields = content;
            await (channel as TextChannel).send({ embeds: [tableOfContents] });
            await process.exit(0)

        }).catch(error => console.error);

    console.log(`${client.user.username} is online`);
});
