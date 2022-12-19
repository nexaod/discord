import { Emojis } from "../../../Utils";

export const magicRangedEntPreset = 'https://media.discordapp.net/attachments/1027186342620299315/1054251529818878032/MREnt.png';

export const magicRangedEntPresetInfo = `
> Courtesy of **Rocket Cars**, **Stuman131**, **geherman** and **Seispip**\n
⬥ ${Emojis.eofPink} ${Emojis.ecb} Eldritch Crossbow
⬥ ${Emojis.eof} ${Emojis.dbow} Dark Bow
⬥ ${Emojis.eofBlack} ${Emojis.decimation} Decimation
⬥ ${Emojis.eofBlue} ${Emojis.sgbEof} Seren Godbow
⬥ ${Emojis.eofYellow} ${Emojis.gstaff} Guthix Staff
⬥ If ${Emojis.hammer}, either take ${Emojis.eof} or physical ${Emojis.hammer}.
⬥ Pouches should contain runes for ${Emojis.inciteFear} ${Emojis.exsang} ${Emojis.iceBarrage} ${Emojis.smokecloud} ${Emojis.sbsLunar} ${Emojis.disrupt}
⬥ Pillars and Zaros are highly dependant on kill speeds
⬥ Phase 1-3 should be executed tick perfectly. If not, you are expected to get yourself back on tick with other ${Emojis.magic} / ${Emojis.ranged} hybrids
⬥ If no ${Emojis.ingen} on Phase 3, ${Emojis.shadowTendril} with ${Emojis.fulArrow} and switch to ${Emojis.deathspore} before it goes off
`;

export const magicRangedEntRotation = [`
__**Pre Build**__\n
> See base for indication ability ${Emojis.gconc} or ${Emojis.dbreath}. Start with ${Emojis.inciteFear}.\n
${Emojis.nati} → ${Emojis.resonance} → ${Emojis.freedom} → ${Emojis.prep} → ${Emojis.meteor} → ${Emojis.grico} → ${Emojis.fsoa} ${Emojis.spec} → ${Emojis.gconc} → ${Emojis.greaterChain} → ${Emojis.greaterSun} on ${Emojis.detonate} spot → ${Emojis.gconc} → ${Emojis.grico} → Build to 100\n
__**Phase 1**__\n
> ${Emojis.iceBarrage} swap can occur at any point after releasing stall depending on team speed, adapt to preserve ${Emojis.inciteFear} stacks. ${Emojis.dbreath} at 2.2M Lifepoints.\n
⬥ Free/Entangle:\n
${Emojis.magma} (at 2.4s) → Stall ${Emojis.omni} → Target Cycle ${Emojis.nex} + ${Emojis.smokecloud} + ${Emojis.asphyx} → ${Emojis.wildMagic} → ${Emojis.iceBarrage} ${Emojis.smokeTendril} → ${Emojis.dbreath}\n
⬥ Hammer:\n
${Emojis.magma} (at 2.4s) → ${Emojis.ingen} + Stall ${Emojis.hammer} ${Emojis.eofSpec} → Target Cycle ${Emojis.nex} + ${Emojis.smokecloud} + ${Emojis.gconc} → ${Emojis.omni} → ${Emojis.iceBarrage} ${Emojis.smokeTendril} → ${Emojis.dbreath}\n
`,
`
__**Phase 2**__\n
${Emojis.greaterDeathSwiftness} → Place ${Emojis.dummy} under ${Emojis.nex} + ${Emojis.corruptionShot} → ${Emojis.shard} → ${Emojis.magma} → Stall ${Emojis.nami} → ${Emojis.smokecloud} + ${Emojis.dbreath} → ${Emojis.bolg} ${Emojis.spec} → ${Emojis.gconc} → ${Emojis.greaterChain} → ${Emojis.impact}\n
__**Phase 3**__\n
${Emojis.deathspore} ${Emojis.ecb} ${Emojis.eofSpec} → ${Emojis.grico} → ${Emojis.fulArrow} (if 5 ${Emojis.deathspore} stacks) ${Emojis.decimation} ${Emojis.eofSpec} → ${Emojis.ingen} + ${Emojis.shadowTendril} → ${Emojis.replenishment} (2 ticks after ${Emojis.shadowTendril}) + ${Emojis.incend} → ${Emojis.fulArrow} ${Emojis.sgbEof} ${Emojis.eofSpec} → ${Emojis.dbow} ${Emojis.eofSpec} → ${Emojis.deathspore} ${Emojis.snap} → ${Emojis.fulArrow} ${Emojis.dbow} ${Emojis.eofSpec} → ${Emojis.deathspore} ${Emojis.grico} → ${Emojis.gconc} → ${Emojis.dbreath}\n
`,
`
__**Pillars**__\n
> Pillars are highly dependant on crit buff from ${Emojis.incend} and thus kill speed, and will likely require improvisation.\n
**Pillar 1** -  ${Emojis.dbow} ${Emojis.eofSpec} if P3 phases before 2nd ${Emojis.dbow} → ${Emojis.grico} → ${Emojis.dbreath} **otherwise** ${Emojis.iceBarrage} ${Emojis.omni} → ${Emojis.gconc} → ${Emojis.gstaff} ${Emojis.eofSpec}\n
**Pillar 2** -  ${Emojis.dbreath} → ${Emojis.iceBarrage} + ${Emojis.fsoa} ${Emojis.spec} → ${Emojis.gconc} → ${Emojis.wildMagic}\n
**Pillar 3** -  ${Emojis.asphyx} → ${Emojis.gconc} → ${Emojis.wrackAndRuin}\n
**Pillar 4** -  ${Emojis.meta} + ${Emojis.iceBarrage} + ${Emojis.gconc} → ${Emojis.dbreath} → ${Emojis.nami} / ${Emojis.tuska}\n
`,
`__**Zaros**__\n
> Highly dependant on pillars and will likely require improvisation.\n
If ${Emojis.nami} on Pillar 4:\n
${Emojis.limitless} ${Emojis.smokeTendril} → ${Emojis.omni} → ${Emojis.wildMagic}\n
**otherwise**:\n
${Emojis.gconc} → ${Emojis.omni} → ${Emojis.limitless} ${Emojis.smokeTendril} → ${Emojis.wildMagic}
`
];

export const magicRangedEntExampleKills = `
⬥ 26 Sep 2022 - [1:22.8](https://www.youtube.com/watch?v=uwGqrQeNdr0) geherman (Entangle)\n
⬥ 19 Aug 2022 - [1:35.4](https://www.youtube.com/watch?v=ODv3TSERqAY) Stuman131 (Free)\n
`;