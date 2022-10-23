import { Client, TextChannel } from "discord.js";
import { Colours, Channels, createEmbed, styleTitle, purgeChannel } from "../Utils";
import { magicRangedEntPreset, magicRangedEntPresetInfo, magicRangedEntRotation, magicRangedEntExampleKills } from "../data/guides/hybrid/magicRangedEntangle";
import { magicRangedBasePreset, magicRangedBasePresetInfo, magicRangedBaseRotation, magicRangedBaseExampleKills } from "../data/guides/hybrid/magicRangedBase";
import { magicMeleeBasePreset, magicMeleeBasePresetInfo, magicMeleeBaseRotation, magicMeleeBaseExampleKills } from "../data/guides/hybrid/magicMeleeBase";
import { magicMeleeEntanglePreset, magicMeleeEntanglePresetInfo, magicMeleeEntangleRotation, magicMeleeEntangleExampleKills } from "../data/guides/hybrid/magicMeleeEntangle";
const token = process.env.DISCORD_TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

const GuideObject: any = {
    mmEnt: {
        title: 'Magic/Melee Entangle',
        preset: {
            title: '> __**Preset**__',
            embed: createEmbed(magicMeleeEntanglePresetInfo, Colours.red),
            image: magicMeleeEntanglePreset,
            toc: 'Preset'
        },
        rotation: {
            title: '> __**Rotation**__\n',
            content: magicMeleeEntangleRotation,
            toc: 'Rotation'
        },
        examples: {
            title: '> __**Example Kills**__',
            embed: createEmbed(magicMeleeEntangleExampleKills, Colours.red),
            toc: 'Example Kills'
        }
    },
    mmBase: {
        title: 'Magic/Melee Base',
        preset: {
            title: '> __**Preset**__',
            embed: createEmbed(magicMeleeBasePresetInfo, Colours.red),
            image: magicMeleeBasePreset,
            toc: 'Preset'
        },
        rotation: {
            title: '> __**Rotation**__\n',
            content: magicMeleeBaseRotation,
            toc: 'Rotation'
        },
        examples: {
            title: '> __**Example Kills**__',
            embed: createEmbed(magicMeleeBaseExampleKills, Colours.red),
            toc: 'Example Kills'
        }
    },
    mrEnt: {
        title: 'Magic/Ranged Entangle/Hammer',
        preset: {
            title: '> __**Preset**__',
            embed: createEmbed(magicRangedEntPresetInfo, Colours.aqua),
            image: magicRangedEntPreset,
            toc: 'Preset'
        },
        rotation: {
            title: '> __**Rotation**__\n',
            content: magicRangedEntRotation,
            toc: 'Rotation'
        },
        examples: {
            title: '> __**Example Kills**__',
            embed: createEmbed(magicRangedEntExampleKills, Colours.aqua),
            toc: 'Example Kills'
        }
    },
    mrBase: {
        title: 'Magic/Ranged Base',
        preset: {
            title: '> __**Preset**__',
            embed: createEmbed(magicRangedBasePresetInfo, Colours.aqua),
            image: magicRangedBasePreset,
            toc: 'Preset'
        },
        rotation: {
            title: '> __**Rotation**__\n',
            content: magicRangedBaseRotation,
            toc: 'Rotation'
        },
        examples: {
            title: '> __**Example Kills**__',
            embed: createEmbed(magicRangedBaseExampleKills, Colours.aqua),
            toc: 'Example Kills'
        }
    }
};

client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    client.channels.fetch(Channels.hybridGuide)
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
                    if (GuideObject[embed][section].image) await (channel as TextChannel).send(GuideObject[embed][section].image);
                }
                if (tocEmbed.value) content.push(tocEmbed);
            }
            tableOfContents.fields = content;
            await (channel as TextChannel).send({ embeds: [tableOfContents] });
            await process.exit(0)

        }).catch(error => console.error);

    console.log(`${client.user.username} is online`);
});