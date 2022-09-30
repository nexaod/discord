import { Client, ClientOptions, SelectMenuOptionBuilder, TextChannel } from "discord.js";
import { Colours, Emojis, Channels, Roles } from "./Utils";

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
const killTimeData = require("./data/leaderboards/killtime.json");

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

const createKillTimeEmbed = (data: any) => {
    const killTimeFields = [];
    for (let killtime in data) {
        if (!data[killtime].time) {
            continue;
        }
        let suffix;
        switch (killtime) {
            case "0":
                suffix = `${Number(killtime) + 1}st`
                break;
            case "1":
                suffix = `${Number(killtime) + 1}nd`
                break;
            default:
                suffix = `${Number(killtime) + 1}rd`
        }
        const roleObject: any = {};
        const emojiKey = `gem${Number(killtime) + 1}`;
        roleObject.name = `${(Emojis as any)[emojiKey]}`;
        roleObject.inline = true;
        roleObject.value = `
        ${data[killtime].time ? `**[${data[killtime].time}](${data[killtime].url})**` : ''}
        ${data[killtime].base ? `${Emojis.voke} ${data[killtime].base}` : ''}
        ${data[killtime].chin ? `${Emojis.chin} ${data[killtime].chin}` : ''}
        ${data[killtime].free ? `${Emojis.freedom} ${data[killtime].free}` : ''}
        ${data[killtime].umbra ? `${Emojis.umbra} ${data[killtime].umbra}` : ''}
        ${data[killtime].glacies ? `${Emojis.glacies} ${data[killtime].glacies}` : ''}
        ${data[killtime].cruor ? `${Emojis.cruor} ${data[killtime].cruor}` : ''}
        ${data[killtime].fumus ? `${Emojis.fumus} ${data[killtime].fumus}` : ''}
        `
        killTimeFields.push(roleObject)
    }
    console.log(killTimeFields)
    return {
        color: Colours.gold,
        text_title: 'Kill Time',
        fields: killTimeFields,
        timestamp: new Date().toISOString(),
        footer: {
            text: 'Last Updated'
        },
    };
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

if (createLeaderboardArray(rangedData).length) embedsToSend.push(rangedEmbed);
if (createLeaderboardArray(meleeData).length) embedsToSend.push(meleeEmbed);
if (createLeaderboardArray(magicData).length) embedsToSend.push(magicEmbed);
if (createLeaderboardArray(hybridData).length) embedsToSend.push(hybridEmbed);
embedsToSend.push(createKillTimeEmbed(killTimeData))

// const channel = client.channels.fetch(baseChannelID).then(channel => {
//     channel?.send({ embeds: [exampleEmbed] });
// }).catch(console.error);

const startingMessage = `
> __**Gem Scores**__\n
⬥ Players can only be on the leaderboard once per role, even if they would hold multiple spots on it (i.e. be #1 and #2).\n
⬥ Only 2K Gems from **FULL** (7/7) FC teams are accepted. Gems will be denied for smaller team sizes.\n
⬥ There must be at least 3 people from the team in the gem UNLESS a <@&${Roles.maintrialhost}>+ can vouch for the validity of the gem.\n
⬥ Submitted role gems must at least qualify for the corresponding <@&${Roles.extreme}> role.\n
> __**Kill Times**__\n
⬥ Only full (7/7) FC teams count.\n
⬥ A screenshot of the full client interface with the group interface with 7/7 members showing is required.\n
⬥ You can apply for a spot on the leaderboard via the <#${Channels.applyforrank}> channel.\n
`

const startingEmbed = {
    color: 5198940,
    title: "🏆 Nex AoD FC Leaderboards",
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
