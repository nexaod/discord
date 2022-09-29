import { Client, ClientOptions, SelectMenuOptionBuilder, TextChannel } from "discord.js";
import { Colours, Emojis, Channels, Roles } from "./Utils";
require('dotenv').config();

const token = process.env.DISCORD_TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

const rangedData = require("./data/leaderboards/ranged.json");
const meleeData = require("./data/leaderboards/melee.json");
const magicData = require("./data/leaderboards/magic.json");
const hybridData = require("./data/leaderboards/hybrid.json");

const createLeaderboardArray = (data: any) => {
    const finalArray = [];
    for (let role in data) {
        // Skip entire section if theres no data (useful when leaderboards are reset)
        const scores = data[role].scores;
        if (!scores[0].name) {
            continue;
        }
        const roleObject: any = {};
        roleObject.name = data[role].title;
        roleObject.inline = false;
        roleObject.value = `
        ${scores[0].name ? `${Emojis.gem1} ${scores[0].name} - [${scores[0].score}](${scores[0].url})` : ''}
        ${scores[1].name ? `${Emojis.gem2} ${scores[1].name} - [${scores[1].score}](${scores[1].url})` : ''}
        ${scores[2].name ? `${Emojis.gem3} ${scores[2].name} - [${scores[2].score}](${scores[2].url})` : ''}
        `
        finalArray.push(roleObject)
    }
    return finalArray;
}

const createStyleEmbed = (data: any, title: string, colour: number, thumbnail: string) => {
    return {
        color: colour,
        text_title: title,
        thumbnail: {
            url: thumbnail,
        },
        fields: createLeaderboardArray(data)
    };
}

const embedsToSend: any = [];

const rangedEmbed = createStyleEmbed(rangedData, 'Ranged', Colours.green, 'https://i.imgur.com/wvyFUc8.png')
const meleeEmbed = createStyleEmbed(meleeData, 'Melee', Colours.red, 'https://puu.sh/JnDzI.png')
const magicEmbed = createStyleEmbed(magicData, 'Magic', Colours.blue, 'https://i.imgur.com/pxUotNE.png')
const hybridEmbed = createStyleEmbed(hybridData, 'Mage/Ranged', Colours.aqua, 'https://i.imgur.com/jR9vfjY.png')

if (createLeaderboardArray(rangedData)) embedsToSend.push(rangedEmbed);
if (createLeaderboardArray(meleeData)) embedsToSend.push(meleeEmbed);
if (createLeaderboardArray(magicData)) embedsToSend.push(magicEmbed);
if (createLeaderboardArray(hybridData)) embedsToSend.push(hybridEmbed);

// const channel = client.channels.fetch(baseChannelID).then(channel => {
//     channel?.send({ embeds: [exampleEmbed] });
// }).catch(console.error);

const startingMessage = `
⬥ Players can only be on the leaderboard once per role, even if they would hold multiple spots on it (i.e. be #1 and #2).\n
⬥ Only 2K Gems from **FULL** (7/7) FC teams are accepted. Gems will be denied for smaller team sizes.\n
⬥ There must be at least 3 people from the team in the gem UNLESS a <@&${Roles.maintrialhost}>+ can vouch for the validity of the gem.\n
⬥ Submitted role gems must at least qualify for the corresponding <@&${Roles.extreme}> role.
`

const startingEmbed = {
    color: 5198940,
    title: "Nex AoD FC Leaderboards",
    description: startingMessage
};

client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    client.channels.fetch(Channels.leaderboard)
        .then(async channel => {
            await (channel as TextChannel).bulkDelete(100)
            await (channel as TextChannel).send({ embeds: [startingEmbed] })
            for (let i = 0; i < embedsToSend.length; i++) {
                await (channel as TextChannel).send(`> __**${embedsToSend[i].text_title}**__`)
                await (channel as TextChannel).send({ embeds: [embedsToSend[i]] })
            }
            // await (channel as TextChannel).send({ embeds: embedsToSend })
            await process.exit(0)
            // .then(() => (channel as TextChannel).send({ embeds: embedsToSend }))
            // .then(() => process.exit(1))
            // .catch(error => console.error);

        }).catch(error => console.error);

    console.log(`${client.user.username} is online`);
});