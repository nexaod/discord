import { Client, ClientOptions, SelectMenuOptionBuilder, TextChannel } from "discord.js";
import { title } from "process";
import { Colours, Emojis, Channels, Roles } from "./Utils";
require('dotenv').config();

const token = process.env.DISCORD_TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

const embedsToSend: any = [];
// const channel = client.channels.fetch(baseChannelID).then(channel => {
//     channel?.send({ embeds: [exampleEmbed] });
// }).catch(console.error);

const generalExpectations = `
> These expectations apply to all roles and combat styles.\n
⬥ A bank preset is required and **quick banking** is expected between kills. Slow banks are frowned upon and may result in retrial.\n
⬥ The **Chinner** or **Base** is required to place the starting dummy.\n
⬥ All ents are required to ${Emojis.vulnBomb} their ${Emojis.amalg}.\n
⬥ You are required to ${Emojis.vulnBomb} your minion as ${Emojis.umbra} or ${Emojis.glacies} tank.\n
⬥ ${Emojis.dommines} are not needed.\n
⬥ Stall adrenaline before and between kills.\n
⬥ Disassemble any dummies you use to build adrenaline.\n
⬥ Regain adrenaline on your own if you died during a kill (preferably with Wars Retreat crystal).\n
⬥ ${Emojis.ripperDemon}${Emojis.ripperScroll} is required with the exception of Ranged Base (${Emojis.mammoth}${Emojis.mammothScroll}), Magic Base (${Emojis.kalgDemon}${Emojis.kalgScroll}) and Ironmen Magic Roles (${Emojis.kalgDemon}${Emojis.kalgScroll}).\n
⬥ Rotations are expected to be followed and can be found under **Guides**.\n
⬥ If ${Emojis.kalgDemon}${Emojis.kalgScroll} is being used, you are expected to ${Emojis.callFamiliar} before speccing.\n
⬥ If ${Emojis.ripperDemon}${Emojis.ripperScroll} is being used, you are expected to use ${Emojis.spiritualPrayer} and spec.\n
⬥ Bombs are expected to be placed correctly and not affect teammates.\n
⬥ 300K Minions are not acceptable. Doing this more than once in an hour will result in retrial.\n
⬥ Minions are expected to be lured quickly, and fixed if mislured. A guide for both can be found in <#${Channels.additionalInfo}>.
`

const magicEnt = `
> A **5.5M** minimum damage threshold is expected in 30 minutes through a 2K Challenge Gem.\n
⬥ ${Emojis.mani} is the only allowed aura.\n
⬥ You can trial as either ${Emojis.umbra} or ${Emojis.glacies}.\n
⬥ A 15% ${Emojis.detonate} (from losing target on ${Emojis.dummy}) is required on P2 to hit both ${Emojis.amalg} and ${Emojis.nex}.\n
⬥ Do not stand melee distance of ${Emojis.umbra} pillar, as meleers might get hit by potential shadows.\n
⬥ We strongly recommend you ${Emojis.magic}/${Emojis.melee} Hybrid.
`

const meleeEnt = `
> A **5.1M** minimum damage threshold is expected in 30 minutes through a 2K Challenge Gem.\n
⬥ ${Emojis.berserker} is the only allowed aura.\n
⬥ You must trial as ${Emojis.glacies}.\n
⬥ ${Emojis.greaterBarge} and ${Emojis.greaterFlurry} is required.\n
⬥ It is highly recommended to utilise ${Emojis.scythe}${Emojis.hurricane} on P2 to hit both ${Emojis.amalg} and ${Emojis.nex}.\n
⬥ It is highly recommended to utilise ${Emojis.scythe}${Emojis.cleave} on P3 to help clear minions.\n
⬥ ${Emojis.dragonBattleAxe} at Adrenaline Crystal and be in time for P1.\n
⬥ To unlock ${Roles.meleeUmbra} a trial is required, or ${Roles.meleeEnt} and Umbra in any other style.\n
⬥ A knowledge of when to ${Emojis.zerk} is required (i.e. -1.2s).\n
⬥ We strongly recommend you ${Emojis.magic}/${Emojis.melee} Hybrid.
`

const createEmbed = (data: string, colour: number, title: string) => {
    return {
        color: colour,
        title: title,
        description: data
    };
}

const startingEmbed = createEmbed(generalExpectations, Colours.default, 'General Expectations');
const magicEntEmbed = createEmbed(magicEnt, Colours.blue, `${Emojis.magic} Magic Entangle`);
const meleeEntEmbed = createEmbed(meleeEnt, Colours.red, `${Emojis.melee} Melee Entangle`);


client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    client.channels.fetch(Channels.performanceExpectations)
        .then(async channel => {
            await (channel as TextChannel).bulkDelete(100)
            await (channel as TextChannel).send({ embeds: [startingEmbed, magicEntEmbed, meleeEntEmbed] })
            await process.exit(0)
            // .then(() => (channel as TextChannel).send({ embeds: embedsToSend }))
            // .then(() => process.exit(1))
            // .catch(error => console.error);

        }).catch(error => console.error);

    console.log(`${client.user.username} is online`);
});