import { Client, TextChannel, ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder } from "discord.js";
import { Colours, Channels, purgeChannel } from "./Utils";

interface Affiliate {
    name: string;
    invite: string;
    description: string;
    thumbnail: string;
    contacts: string[];
}

const affiliates: Affiliate[] = require("./data/affiliates.json");

const createAffiliateEmbed = (affiliate: Affiliate) => {
    const embed = new EmbedBuilder()
        .setColor(Colours.gold)
        .setTitle(affiliate.name)
        .setDescription(affiliate.description)
    if (affiliate.thumbnail) embed.setThumbnail(affiliate.thumbnail);
    if (affiliate.contacts.length) {
        let contactString = '';
        affiliate.contacts.forEach((contact: string) => {
            contactString += `⬥ <@${contact}>\n`
        })
        embed.addFields(
            {
                name: 'Contact', value: contactString, inline: true
            }
        )
    }
    return embed
}

const createJoinButton = (affiliate: Affiliate) => {
    return new ActionRowBuilder<ButtonBuilder>().setComponents(new ButtonBuilder()
        .setURL(affiliate.invite)
        .setLabel(`Click here to join ${affiliate.name}`)
        .setStyle(ButtonStyle.Link))
}

const token = process.env.DISCORD_TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    const tableOfContents = new EmbedBuilder()
        .setColor(Colours.lightblue)
        .setTitle('Nex AoD FC Affiliates')
        .setTimestamp(new Date())
        .setFooter(
            { text: 'Last Updated' }
        )
    let tocDescription: string = '';
    const channel = await client.channels.fetch(Channels.affiliates) as TextChannel;
    await purgeChannel(channel);
    await channel.send(`> __**Nex AoD FC Affiliates**__`);
    for await (const affiliate of affiliates) {
        await channel.send({
            embeds: [createAffiliateEmbed(affiliate)],
            components: [createJoinButton(affiliate)]
        }).then(message => {
            tocDescription += `⬥ [${affiliate.name}](${message.url})\n`;
        });
    };
    tableOfContents.setDescription(tocDescription);
    await channel.send({ embeds: [tableOfContents] });
    await process.exit(0)
    console.log(`${client.user.username} is online`);
});