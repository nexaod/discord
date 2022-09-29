import { Client, ClientOptions, SelectMenuOptionBuilder, TextChannel } from "discord.js";
import { Colours, Emojis } from "./Utils"
require('dotenv').config();

const token = process.env.DISCORD_TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

const exampleEmbed = {
    color: Colours.green,
    title: 'Ranged Leaderboards',
    description: '',
    thumbnail: {
        url: 'https://puu.sh/JnCTw.png',
    },
    fields: [
        {
            name: 'Ranged Ent',
            value: '**<:gem3:1024939228527853649>x Neon** - 49203402\nSad Riven - 78949230 My favorite search engine is [Duck Duck Go](https://duckduckgo.com).',
            inline: false,
        },
        {
            name: 'Ranged Ent',
            value: '**x Neon** - 49203402\nSad Riven - 78949230 My favorite search engine is [Duck Duck Go](https://duckduckgo.com).',
            inline: false,
        },
        {
            name: 'Ranged Ent',
            value: '**x Neon** - 49203402\nSad Riven - 78949230 My favorite search engine is [Duck Duck Go](https://duckduckgo.com).',
            inline: false,
        },
        {
            name: 'Ranged Ent',
            value: '**x Neon** - 49203402\nSad Riven - 78949230 My favorite search engine is [Duck Duck Go](https://duckduckgo.com).',
            inline: false,
        },
    ]
};

const baseChannelID = '1024895653459001374';
// const channel = client.channels.fetch(baseChannelID).then(channel => {
//     channel?.send({ embeds: [exampleEmbed] });
// }).catch(console.error);

client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    client.channels.fetch(baseChannelID)
        .then(channel => {
            (channel as TextChannel).bulkDelete(100)
                .then(() => (channel as TextChannel).send({ embeds: [exampleEmbed] }))
                .then(() => process.exit(1))
                .catch(error => console.error);

        });

    console.log(`${client.user.username} is online`);
});