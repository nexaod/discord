import { Client, TextChannel } from "discord.js";
import { Colours, Channels } from "./Utils";
const token = process.env.DISCORD_TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);


const botModule = process.env.MODULE;
const sha = process.env.SHA;
const baseURL = 'https://github.com/nexaod/discord/commit/';

const changelogEmbed = {
    color: Colours.lightblue,
    title: `${botModule} updated!`,
    description: `See changes [here](${baseURL}${sha}).`,
    timestamp: new Date().toISOString(),
    footer: {
        text: 'Last Updated'
    }
}

client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    client.channels.fetch(Channels.changelog)
        .then(async channel => {
            await (channel as TextChannel).send({ embeds: [changelogEmbed] });
            await process.exit(0)

        }).catch(error => console.error);

    console.log(`${client.user.username} is online`);
});
