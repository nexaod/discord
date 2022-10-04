import { Client, TextChannel } from "discord.js";
import { Colours, Channels, createEmbed } from "./Utils";
import { general, inviteURL } from "./data/AdditionalInfo";

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
    client.channels.fetch(Channels.additionalInfo)
        .then(async channel => {
            await (channel as TextChannel).bulkDelete(100)
            await (channel as TextChannel).send('> __**Additional Information**__');
            await (channel as TextChannel).send({ embeds: [createEmbed(general, Colours.gold)] });
            await (channel as TextChannel).send(`> __**Server Invite**__: ${inviteURL}`);
            await process.exit(0)

        }).catch(error => console.error);

    console.log(`${client.user.username} is online`);
});