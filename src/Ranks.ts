import { Client, TextChannel, Message } from "discord.js";
import { Colours, Channels, Roles, TextUtils, createEmbed } from "./Utils";
import { startingMessage, dpsInfo, other } from './data/ranks/Ranks';
const token = process.env.DISCORD_TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

const magicData = require("./data/ranks/magic.json");
const rangedData = require("./data/ranks/ranged.json");
const hybridData = require("./data/ranks/hybrid.json");
const meleeData = require("./data/ranks/melee.json");
const kcData = require("./data/ranks/killcount.json");

const createDPSArray = (data: any) => {
    const fields = [];
    for (let role in data) {
        const roleObject: any = {};
        roleObject.name = data[role].title;
        roleObject.inline = false;
        roleObject.value = '';
        for (let rank in data[role]) {
            if (data[role][rank].score) {
                roleObject.value += `${Roles[data[role][rank]['role']]} - ${data[role][rank].score}\n`;
            }
        }
        fields.push(roleObject);
    }
    return fields;
}

const createStyleEmbed = (data: any, colour: number, thumbnail: string) => {
    return {
        color: colour,
        thumbnail: {
            url: thumbnail,
        },
        fields: createDPSArray(data)
    };
}

const RanksObject: any = {
    dps: {
        title: '> __**DPS Ranks**__',
        toc: 'General',
        embed: createEmbed(dpsInfo, Colours.gold)
    },
    magic: {
        title: '> __**Magic Ranks**__',
        toc: 'Magic',
        embed: createStyleEmbed(magicData, Colours.blue, 'https://i.imgur.com/pxUotNE.png')
    },
    ranged: {
        title: '> __**Ranged Ranks**__',
        toc: 'Ranged',
        embed: createStyleEmbed(rangedData, Colours.green, 'https://i.imgur.com/wvyFUc8.png')
    },
    hybrid: {
        title: '> __**Hybrid Ranks**__',
        toc: 'Hybrid',
        embed: createStyleEmbed(hybridData, Colours.aqua, 'https://i.imgur.com/jR9vfjY.png')
    },
    melee: {
        title: '> __**Melee Ranks**__',
        toc: 'Melee',
        embed: createStyleEmbed(meleeData, Colours.red, 'https://puu.sh/JnDzI.png')
    },
    killcount: {
        title: '> __**Kill Count Ranks**__',
        toc: 'Kill Count',
        embed: createStyleEmbed(kcData, Colours.red, 'https://i.imgur.com/e6HKKeK.png')
    },
    other: {
        title: '> __**Other Ranks**__',
        toc: 'Other',
        embed: createEmbed(other, Colours.gold)
    }
};

client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    client.channels.fetch(Channels.ranks)
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
            await (channel as TextChannel).bulkDelete(100)
            await (channel as TextChannel).send(`> __**Nex AoD FC Ranks**__`);
            await (channel as TextChannel).send({ embeds: [createEmbed(startingMessage, Colours.gold)] });
            for (let embed in RanksObject) {
                await (channel as TextChannel).send(RanksObject[embed].title).then(message => {
                    createTableOfContentsItem(message, RanksObject[embed].toc);
                });
                await (channel as TextChannel).send({ embeds: [RanksObject[embed].embed] });
            }
            tableOfContents.fields = content;
            await (channel as TextChannel).send({ embeds: [tableOfContents] });
            await process.exit(0)

        }).catch(error => console.error);

    console.log(`${client.user.username} is online`);
});