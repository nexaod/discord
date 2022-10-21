import { Client, TextChannel } from "discord.js";
import { Colours, Channels, createEmbed } from "../Utils";
import { general } from "../data/guides/Other";

const token = process.env.DISCORD_TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    client.channels.fetch(Channels.otherGuide)
        .then(async channel => {
            await (channel as TextChannel).bulkDelete(100)
            await (channel as TextChannel).send('> __**Additional Guides**__');
            await (channel as TextChannel).send({ embeds: [createEmbed(general, Colours.gold)] });
            await process.exit(0)

        }).catch(error => console.error);

    console.log(`${client.user.username} is online`);
});