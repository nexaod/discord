import { Client, TextChannel, Message } from "discord.js";
import { Colours, Channels, createEmbed, purgeChannel } from "./Utils";
import {
    generalExpectations, magicEnt, meleeEnt, rangedEnt,
    hybridMageRangedEnt, chinner, free, base, other
} from "./data/Expectations";

const token = process.env.DISCORD_TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

const ExpectationsObject: any = {
    starting: {
        title: '> __**General Expectations**__',
        toc: 'General',
        embed: createEmbed(generalExpectations, Colours.gold)
    },
    magic: {
        title: '> __**Magic Entangle**__',
        toc: 'Magic Entangle',
        embed: createEmbed(magicEnt, Colours.blue)
    },
    melee: {
        title: '> __**Melee Entangle**__',
        toc: 'Melee Entangle',
        embed: createEmbed(meleeEnt, Colours.red)
    },
    ranged: {
        title: '> __**Ranged Entangle**__',
        toc: 'Ranged Entangle',
        embed: createEmbed(rangedEnt, Colours.green)
    },
    hybrid: {
        title: '> __**Magic/Ranged Entangle**__',
        toc: 'Magic/Ranged Entangle',
        embed: createEmbed(hybridMageRangedEnt, Colours.aqua)
    },
    chin: {
        title: '> __**Chinner**__',
        toc: 'Chinner',
        embed: createEmbed(chinner, Colours.green)
    },
    freeText: {
        title: '> __**Free**__',
        toc: 'Free',
        embed: createEmbed(free, Colours.gold)
    },
    baseText: {
        title: '> __**Base**__',
        toc: 'Base',
        embed: createEmbed(base, Colours.blue)
    },
    other: {
        title: '> __**Other Information**__',
        toc: 'Other',
        embed: createEmbed(other, Colours.gold)
    }
};


client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    client.channels.fetch(Channels.performanceExpectations)
        .then(async channel => {
            const tableOfContents: any = {
                color: Colours.lightblue,
                title: 'Table of Contents',
                timestamp: new Date().toISOString(),
                footer: {
                    text: 'Last Updated'
                }
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
            await purgeChannel((channel as TextChannel));
            for (let embed in ExpectationsObject) {
                await (channel as TextChannel).send(ExpectationsObject[embed].title).then(message => {
                    createTableOfContentsItem(message, ExpectationsObject[embed].toc);
                });
                await (channel as TextChannel).send({ embeds: [ExpectationsObject[embed].embed] });
            }
            tableOfContents.fields = content;
            await (channel as TextChannel).send({ embeds: [tableOfContents] });
            await process.exit(0)

        }).catch(error => console.error);

    console.log(`${client.user.username} is online`);
});