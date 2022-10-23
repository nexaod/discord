import { Client, TextChannel, Message } from "discord.js";
import { Colours, Channels, createEmbed, purgeChannel } from "./Utils";
import {
    general, supplies, mainPerks, switches, relics,
    mageBase, mageEnt, meleeEnt, rangedEnt, chinner
} from "./data/Gear";

const token = process.env.DISCORD_TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

const GearObject: any = {
    starting: {
        title: '> __**General Expectations**__',
        toc: 'General',
        embed: createEmbed(general, Colours.gold)
    },
    supplies: {
        title: '> __**Supplies**__',
        toc: 'Supplies',
        embed: createEmbed(supplies, Colours.gold)
    },
    mainPerks: {
        title: '> __**Main Perks**__',
        toc: 'Main Perks',
        embed: createEmbed(mainPerks, Colours.gold)
    },
    switches: {
        title: '> __**Switches**__',
        toc: 'Switches',
        embed: createEmbed(switches, Colours.gold)
    },
    relics: {
        title: '> __**Relics**__',
        toc: 'Relics',
        embed: createEmbed(relics, Colours.gold)
    },
    mageBase: {
        title: '> __**Magic Base**__',
        toc: 'Magic Base',
        embed: createEmbed(mageBase, Colours.blue)
    },
    mageEnt: {
        title: '> __**Magic Entangle**__',
        toc: 'Magic Entangle',
        embed: createEmbed(mageEnt, Colours.blue)
    },
    meleeEnt: {
        title: '> __**Melee Entangle**__',
        toc: 'Melee Entangle',
        embed: createEmbed(meleeEnt, Colours.red)
    },
    rangedEnt: {
        title: '> __**Ranged Entangle**__',
        toc: 'Ranged Entangle',
        embed: createEmbed(rangedEnt, Colours.green)
    },
    chinner: {
        title: '> __**Chinner**__',
        toc: 'Chinner',
        embed: createEmbed(chinner, Colours.green)
    }
};


client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    client.channels.fetch(Channels.gear)
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
            for (let embed in GearObject) {
                await (channel as TextChannel).send(GearObject[embed].title).then(message => {
                    createTableOfContentsItem(message, GearObject[embed].toc);
                });
                await (channel as TextChannel).send({ embeds: [GearObject[embed].embed] });
            }
            tableOfContents.fields = content;
            await (channel as TextChannel).send({ embeds: [tableOfContents] });
            await process.exit(0)

        }).catch(error => console.error);

    console.log(`${client.user.username} is online`);
});