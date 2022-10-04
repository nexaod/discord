import { Emoji, Role } from "discord.js";
import { Emojis, Channels, Roles, TextUtils } from "../Utils";

export const general = `
> This channel outlines the generic gear and supply requirements.\n
⬥ You are not required to bring both dual-wield and 2H weapons for some roles with the exception of ${Emojis.flanking} and ${Emojis.plantedFeet}.\n
⬥ We recommend using a mainhand weapon or defender for ${Emojis.plantedFeet} and ${Emojis.as1} perks.\n
⬥ Perks listed are the minimum requirements. Better ones are obviously accepted.\n
⬥ Using 11 ${Emojis.spiritWeedIncenseSticks} will greatly boost your ${Emojis.ripperDemon} or ${Emojis.mammoth}.\n
⬥ Using ${Emojis.weaponPoison} either in preset or while banking can help with ${Emojis.amalg}.
`;

export const supplies = `
> __**Food**__\n
⬥ Your main healing items should consist of:
${TextUtils.subpoint} ${Emojis.guthixRest} ${Emojis.saraBrew} ${Emojis.superSaraBrew}
${TextUtils.subpoint} ${Emojis.blubber}
${TextUtils.subpoint} Solids: ${Emojis.sailfish} ${Emojis.sailfishSoup} ${Emojis.rocktailSoup}\n
⬥ Non bases are limited to 1 ${Emojis.saraBrew} and 1 solid.\n
⬥ Solid food is generally not needed for anyone but the base.\n
> __**Potions**__\n
Bring one of each of the following:\n
⬥ ${Emojis.elderOverload} or ${Emojis.elderOverloadSalve} (if you dont want to use ${Emojis.guthixRest} to clear poison).\n
⬥ ${Emojis.spiritualPrayer} ${Emojis.adrenRenewal} ${Emojis.accelPot}\n
> __**Familiar**__\n
⬥ Bases: ${Emojis.kalgDemon}${Emojis.kalgScroll}\n
⬥ ${Roles.ironman} Magic roles: ${Emojis.kalgDemon}${Emojis.kalgScroll}\n
⬥ All other roles: ${Emojis.ripperDemon}${Emojis.ripperScroll}\n
> __**Others**__\n
⬥ Bank Presets for fast banking.\n
⬥ ${Emojis.limitless} Limitless.\n
⬥ ${Emojis.ingen} for Ranged roles.\n
`;

export const mainPerks = `
> __**2H**__\n
⬥ ${Emojis.p6} Precise 6\n
⬥ ${Emojis.as4} Aftershock 4\n
⬥ For ${Emojis.scythe} ${Emojis.p6} and ${Emojis.as1} is acceptable.\n
> __**Mainhand (Dual Wield)**__\n
⬥ ${Emojis.as4} Aftershock 4\n
> __**Offhand (Dual Wield)**__\n
⬥ ${Emojis.p6} Precise 6\n
> __**Armour**__\n
⬥ ${Emojis.b4} Biting 4\n
⬥ ${Emojis.imp4} Impatient 4\n
⬥ ${Emojis.crack4} Crackling 4\n
⬥ ${Emojis.r5} Relentless 5\n
`;

export const switches = `
> __**Flanking**__\n
⬥ ${Emojis.flanking} or a combo on a Tier 80+ Off Hand.\n
⬥ ${Emojis.flanking} ${Emojis.as4} on a Tier 88+ 2H.\n
> __**Planted Feet**__\n
⬥ ${Emojis.plantedFeet} on any weapon.\n
⬥ ${Emojis.as1} or higher must be equipped at the same time.\n
⬥ Not required if ${Emojis.greaterSun} and ${Emojis.greaterDeathSwiftness} are owned.\n
> __**Bladed Dive**__\n
⬥ Mainhand: ${Emojis.as1} or higher.\n
⬥ Offhand: ${Emojis.mobile} only if armour does not have it.\n
`;

export const relics = `
> The minimum required Archaeology level is **95**.\n
2 of the following relics are required:\n
⬥ ${Emojis.berserkersFury} Berserker's Fury\n
⬥ ${Emojis.furyOfTheSmall} Fury of the Small\n
⬥ ${Emojis.heightenedSenses} Heightened Senses\n
⬥ ${Emojis.conservationOfEnergy} Conservation of Energy\n
At 120 Archaeology, some of the following combinations are viable:\n
⬥ ${Emojis.berserkersFury} ${Emojis.conservationOfEnergy} ${Emojis.fontOfLife}\n
⬥ ${Emojis.berserkersFury} ${Emojis.heightenedSenses} ${Emojis.fontOfLife}
`;

export const mageBase = `
> __**Helm/Chestplate/Legs**__\n
Any combination of the following:\n
⬥ ${Emojis.zurielHood} ${Emojis.zurielBody} ${Emojis.zurielBottom} Superior Zuriel\n
⬥ ${Emojis.virtusMask} ${Emojis.virtusBody} ${Emojis.virtusLegs} Virtus\n
⬥ ${Emojis.serenHelm} ${Emojis.serenBody} ${Emojis.serenLegs} Refined Seren\n
⬥ ${Emojis.tectonicMask} ${Emojis.tectonicBody} ${Emojis.tectonicLegs} Tectonic\n
⬥ ${Emojis.eliteTectonicMask} ${Emojis.eliteTectonicBody} ${Emojis.eliteTectonicLegs} Elite Tectonic\n
> __**Weapons**__\n
One of the following weapon sets:\n
⬥ ${Emojis.fsoa} Fractured Staff of Armadyl\n
⬥ ${Emojis.seisWand} ${Emojis.seisSing} Seismics\n
⬥ ${Emojis.praesWand} ${Emojis.impCore} Praesuls\n
> __**Gloves**__\n
⬥ ${Emojis.dtb} Deathtouched bracelet\n
> __**Boots**__\n
⬥ ${Emojis.blastDiffusionBoots} Blast Diffusion Boots\n
> __**Necklace**__\n
⬥ ${Emojis.hammer} ${Emojis.eof}\n
⬥ ${Emojis.gstaff} ${Emojis.eof}\n
> __**Rings**__\n
It is expected you have ${Emojis.vigour} passive and one of the following rings:\n
⬥ ${Emojis.reaversRing} Reaver's Ring\n
⬥ ${Emojis.channelersRing} Channeler's Ring\n
> __**Pocket**__\n
⬥ ${Emojis.grim} Erethdor's Grimoire\n
> __**Aura**__\n
⬥ ${Emojis.mani} Maniacal\n
> __**Cape**__\n
Any of the following:\n
⬥ ${Emojis.kalMej} Igneous Kal-Mej\n
⬥ ${Emojis.kalZuk} Igneous Kal-Zuk\n
> __**Other**__\n
⬥ ${Emojis.gconc} Greater Concentrated Blast\n
⬥ ${Emojis.flanking} Flanking\n
⬥ ${Emojis.plantedFeet} or ${Emojis.greaterSun}\n
⬥ The ability to ${Emojis.smokecloud}\n
⬥ ${Emojis.affliction} T99 Magic Prayer\n
`;

export const mageEnt = `
> __**Helm/Chestplate/Legs**__\n
Any combination of the following:\n
⬥ ${Emojis.zurielHood} ${Emojis.zurielBody} ${Emojis.zurielBottom} Superior Zuriel\n
⬥ ${Emojis.virtusMask} ${Emojis.virtusBody} ${Emojis.virtusLegs} Virtus\n
⬥ ${Emojis.serenHelm} ${Emojis.serenBody} ${Emojis.serenLegs} Refined Seren\n
⬥ ${Emojis.tectonicMask} ${Emojis.tectonicBody} ${Emojis.tectonicLegs} Tectonic\n
⬥ ${Emojis.eliteTectonicMask} ${Emojis.eliteTectonicBody} ${Emojis.eliteTectonicLegs} Elite Tectonic\n
> __**Weapons**__\n
One of the following weapon sets:\n
⬥ ${Emojis.fsoa} Fractured Staff of Armadyl\n
⬥ ${Emojis.seisWand} ${Emojis.seisSing} Seismics\n
⬥ ${Emojis.praesWand} ${Emojis.impCore} Praesuls\n
> __**Gloves**__\n
⬥ ${Emojis.dtb} Deathtouched bracelet\n
> __**Boots**__\n
⬥ ${Emojis.blastDiffusionBoots} Blast Diffusion Boots\n
> __**Necklace**__\n
⬥ ${Emojis.gstaff} ${Emojis.eof} Essence of Finality amulet\n
> __**Rings**__\n
It is expected you have ${Emojis.vigour} passive and one of the following rings:\n
⬥ ${Emojis.reaversRing} Reaver's Ring\n
⬥ ${Emojis.channelersRing} Channeler's Ring\n
> __**Pocket**__\n
⬥ ${Emojis.grim} Erethdor's Grimoire\n
> __**Aura**__\n
⬥ ${Emojis.mani} Maniacal\n
> __**Cape**__\n
Any of the following:\n
⬥ ${Emojis.kalMej} Igneous Kal-Mej\n
⬥ ${Emojis.kalZuk} Igneous Kal-Zuk\n
> __**Other**__\n
⬥ ${Emojis.gconc} Greater Concentrated Blast\n
⬥ ${Emojis.flanking} Flanking\n
⬥ ${Emojis.plantedFeet} or ${Emojis.greaterSun}\n
⬥ The ability to ${Emojis.smokecloud}\n
⬥ ${Emojis.affliction} T99 Magic Prayer\n
`;

export const meleeEnt = `
> __**Helm/Chestplate/Legs**__\n
A combination of the following:\n
⬥ ${Emojis.tmwHelm} ${Emojis.tmwBody} ${Emojis.tmwLegs} Trimmed Masterwork\n
⬥ ${Emojis.vestmentHood} ${Emojis.vestmentTop} ${Emojis.vestmentBottoms} Vestments of Havoc\n
> __**Weapons**__\n
**ALL** of the following weapon sets:\n
⬥ ${Emojis.zgs} or ${Emojis.ezk}\n
⬥ ${Emojis.khopMH} ${Emojis.khopOH} or ${Emojis.lengMH} ${Emojis.lengOH}\n
⬥ ${Emojis.scythe} Scythe\n
> __**Gloves**__\n
⬥ ${Emojis.dtb} Deathtouched bracelet\n
> __**Boots**__\n
One of the following:\n
⬥ ${Emojis.tmwBoots} Trimmed Masterwork\n
⬥ ${Emojis.vestmentBoots} Vestments of Havoc\n
⬥ ${Emojis.lacerations} Laceration Boots\n
> __**Necklace**__\n
⬥ ${Emojis.eof} Essence of Finality amulet\n
> __**Rings**__\n
It is expected you have ${Emojis.vigour} passive and one of the following rings:\n
⬥ ${Emojis.reaversRing} Reaver's Ring\n
⬥ ${Emojis.rod} Ring of Death\n
> __**Pocket**__\n
⬥ ${Emojis.grim} Erethdor's Grimoire\n
> __**Aura**__\n
⬥ ${Emojis.berserker} Berserker\n
> __**Cape**__\n
Any of the following:\n
⬥ ${Emojis.kalKet} Igneous Kal-Ket\n
⬥ ${Emojis.kalZuk} Igneous Kal-Zuk\n
> __**Other**__\n
⬥ ${Emojis.flanking} Flanking\n
⬥ ${Emojis.greaterBarge} Greater Barge\n
⬥ ${Emojis.greaterFlurry} Greater Flurry\n
⬥ ${Emojis.malevolence} T99 Melee Prayer\n
`;

export const rangedEnt = `
> __**Helm/Chestplate/Legs**__\n
A combination of the following:\n
⬥ ${Emojis.morrCoif} ${Emojis.morrBody} ${Emojis.morrChaps} Superior Morrigan\n
⬥ ${Emojis.pernixCowl} ${Emojis.pernixBody} ${Emojis.pernixChaps} Pernix\n
⬥ ${Emojis.zamorakHelm} ${Emojis.zamorakBody} ${Emojis.zamorakLegs} Refined Zamorak\n
⬥ ${Emojis.sirenicMask} ${Emojis.sirenicBody} ${Emojis.sirenicLegs} Sirenic\n
⬥ ${Emojis.eliteSirenicMask} ${Emojis.eliteSirenicBody} ${Emojis.eliteSirenicLegs} Elite Sirenic\n
> __**Weapons**__\n
**ALL** of the following weapon sets:\n
⬥ ${Emojis.ecb} or ${Emojis.bolg}\n
⬥ ${Emojis.ascMH} ${Emojis.ascOH} or ${Emojis.blightMH} ${Emojis.blightOH}\n
> __**Gloves**__\n
One of the following:\n
⬥ ${Emojis.dtb} Deathtouched bracelet\n
⬥ ${Emojis.nightmares} Nightmare gauntlets\n
> __**Boots**__\n
⬥ ${Emojis.fleetings} Fleeting boots\n
> __**Necklace**__\n
⬥ ${Emojis.ecb} ${Emojis.eof} if no physical ${Emojis.ecb}\n
⬥ ${Emojis.sgbEof} ${Emojis.eof}\n
⬥ ${Emojis.dbow} ${Emojis.eof}\n
> __**Rings**__\n
It is expected you have ${Emojis.vigour} passive and one of the following rings:\n
⬥ ${Emojis.reaversRing} Reaver's Ring\n
⬥ ${Emojis.stalkersRing} Stalker's Ring\n
⬥ ${Emojis.rod} Ring of Death\n
> __**Pocket**__\n
⬥ ${Emojis.grim} Erethdor's Grimoire\n
> __**Aura**__\n
⬥ ${Emojis.reckless} Reckless\n
> __**Cape**__\n
Any of the following:\n
⬥ ${Emojis.kalXil} Igneous Kal-Xil\n
⬥ ${Emojis.kalZuk} Igneous Kal-Zuk\n
> __**Other**__\n
⬥ ${Emojis.grico} Greater Ricochet\n
⬥ ${Emojis.caroming4} on ${Emojis.ecb} or ${Emojis.blightOH}\n
⬥ ${Emojis.flanking} Flanking\n
⬥ ${Emojis.plantedFeet} or ${Emojis.greaterDeathSwiftness}\n
⬥ ${Emojis.desolation} T99 Ranged Prayer\n
⬥ Completed Elite Seers Village Diary\n
⬥ ${Emojis.fulArrow} ${Emojis.deathspore} if using a Bow\n
⬥ ${Emojis.rubyBak} ${Emojis.hydrixBak} if using a Crossbow\n
⬥ ${Emojis.ingen} Ingenuity of the Humans\n
`;

export const chinner = `
> __**Helm/Chestplate/Legs**__\n
A combination of the following:\n
⬥ ${Emojis.morrCoif} ${Emojis.morrBody} ${Emojis.morrChaps} Superior Morrigan\n
⬥ ${Emojis.pernixCowl} ${Emojis.pernixBody} ${Emojis.pernixChaps} Pernix\n
⬥ ${Emojis.zamorakHelm} ${Emojis.zamorakBody} ${Emojis.zamorakLegs} Refined Zamorak\n
⬥ ${Emojis.sirenicMask} ${Emojis.sirenicBody} ${Emojis.sirenicLegs} Sirenic\n
⬥ ${Emojis.eliteSirenicMask} ${Emojis.eliteSirenicBody} ${Emojis.eliteSirenicLegs} Elite Sirenic\n
> __**Weapons**__\n
**ALL** of the following weapon sets:\n
⬥ ${Emojis.ecb} or ${Emojis.bolg}\n
⬥ ${Emojis.ascMH} ${Emojis.ascOH} or ${Emojis.blightMH} ${Emojis.blightOH}\n
> __**Gloves**__\n
One of the following:\n
⬥ ${Emojis.dtb} Deathtouched bracelet\n
⬥ ${Emojis.nightmares} Nightmare gauntlets\n
> __**Boots**__\n
⬥ ${Emojis.fleetings} Fleeting boots\n
> __**Necklace**__\n
⬥ ${Emojis.ecb} ${Emojis.eof} if no physical ${Emojis.ecb}\n
⬥ ${Emojis.hammer} ${Emojis.eof}\n
⬥ ${Emojis.sgbEof} ${Emojis.eof}\n
⬥ ${Emojis.dbow} ${Emojis.eof}\n
⬥ ${Emojis.decimation} ${Emojis.eof} if executing the Decimation rotation\n
> __**Rings**__\n
It is expected you have ${Emojis.vigour} passive and one of the following rings:\n
⬥ ${Emojis.reaversRing} Reaver's Ring\n
⬥ ${Emojis.stalkersRing} Stalker's Ring\n
⬥ ${Emojis.rod} Ring of Death\n
> __**Pocket**__\n
⬥ ${Emojis.grim} Erethdor's Grimoire\n
> __**Aura**__\n
⬥ ${Emojis.reckless} Reckless\n
> __**Cape**__\n
Any of the following:\n
⬥ ${Emojis.kalXil} Igneous Kal-Xil\n
⬥ ${Emojis.kalZuk} Igneous Kal-Zuk\n
> __**Other**__\n
⬥ ${Emojis.grico} Greater Ricochet\n
⬥ ${Emojis.caroming4} on ${Emojis.ecb} or ${Emojis.blightOH}\n
⬥ ${Emojis.flanking} Flanking\n
⬥ ${Emojis.plantedFeet} or ${Emojis.greaterDeathSwiftness}\n
⬥ ${Emojis.desolation} T99 Ranged Prayer\n
⬥ Completed Elite Seers Village Diary\n
⬥ ${Emojis.fulArrow} ${Emojis.deathspore} if using a Bow\n
⬥ ${Emojis.rubyBak} ${Emojis.hydrixBak} if using a Crossbow\n
⬥ ${Emojis.ingen} Ingenuity of the Humans\n
`;