import { Client, TextChannel } from "discord.js";
import { Colours, Channels, createEmbedBuilder, styleTitle, purgeChannel } from "../Utils";
import { rangedEntPreset, rangedEntPresetInfo, rangedEntRotation, rangedEntExampleKills } from "../data/guides/ranged/rangedEntangle";
import { chinnerPreset, chinnerPresetInfo, chinnerRotation, chinnerExampleKills } from "../data/guides/ranged/chinner";
const token = process.env.DISCORD_TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

const GuideObject: any = {
    ent: {
        title: 'Ranged Entangle',
        preset: {
            title: '> __**Preset**__',
            embed: createEmbedBuilder(rangedEntPresetInfo, Colours.green, rangedEntPreset),
            toc: 'Preset'
        },
        rotation: {
            title: '> __**Rotation**__\n',
            content: rangedEntRotation,
            toc: 'Rotation'
        },
        examples: {
            title: '> __**Example Kills**__',
            embed: createEmbedBuilder(rangedEntExampleKills, Colours.green),
            toc: 'Example Kills'
        }
    },
    chinner: {
        title: 'Chinner',
        preset: {
            title: '> __**Preset**__',
            embed: createEmbedBuilder(chinnerPresetInfo, Colours.green, chinnerPreset),
            toc: 'Preset'
        },
        rotation: {
            title: '> __**Rotation**__\n',
            content: chinnerRotation,
            toc: 'Rotation'
        },
        examples: {
            title: '> __**Example Kills**__',
            embed: createEmbedBuilder(chinnerExampleKills, Colours.green),
            toc: 'Example Kills'
        }
    }
};

client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    client.channels.fetch(Channels.rangedGuide)
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
            await purgeChannel((channel as TextChannel));
            for (let embed in GuideObject) {
                const tocEmbed: any = {
                    name: '',
                    value: '',
                    inline: true
                };
                for (let section in GuideObject[embed]) {
                    if (section === 'title') {
                        tocEmbed.name = GuideObject[embed].title;
                        await (channel as TextChannel).send(styleTitle(GuideObject[embed].title));
                        continue;
                    }
                    await (channel as TextChannel).send(GuideObject[embed][section].title).then(message => {
                        tocEmbed.value += `⬥ [${GuideObject[embed][section].toc}](${message.url})\n`;
                    });
                    if (GuideObject[embed][section].embed) {
                        await (channel as TextChannel).send({ embeds: [GuideObject[embed][section].embed] });
                    } else {
                        Array.from(GuideObject[embed][section].content).forEach(async (element: any) => {
                            await (channel as TextChannel).send(element);
                        });
                    }
                }
                if (tocEmbed.value) content.push(tocEmbed);
            }
            tableOfContents.fields = content;
            await (channel as TextChannel).send({ embeds: [tableOfContents] });
            await process.exit(0)

        }).catch(error => console.error);

    console.log(`${client.user.username} is online`);
});