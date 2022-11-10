import { Emoji, Role } from "discord.js";
import { Emojis, Channels, Roles, TextUtils } from "../Utils";

export const general = `
> This channel outlines the generic gear and supply requirements.\n
⬥ You are not required to bring both dual-wield and 2H weapons for some roles with the exception of ${Emojis.flanking} and ${Emojis.plantedFeet}.\n
⬥ We recommend using a mainhand weapon or defender for ${Emojis.plantedFeet} and ${Emojis.as1} perks.\n
⬥ Perks listed are the minimum requirements. Better ones are obviously accepted.\n
⬥ Using 11 ${Emojis.spiritWeedIncenseSticks} will greatly boost your ${Emojis.ripperDemon}.\n
⬥ Using ${Emojis.weaponPoison} either in preset or while banking can help with ${Emojis.amalg}.
`;

export const supplies = `
> __**Food**__\n
⬥ Your main healing items should consist of:
${TextUtils.noSpaceSubPoint} ${Emojis.guthixRest} ${Emojis.saraBrew} ${Emojis.superSaraBrew}
${TextUtils.noSpaceSubPoint} ${Emojis.blubber}
${TextUtils.noSpaceSubPoint} Solids: ${Emojis.sailfish} ${Emojis.sailfishSoup} ${Emojis.rocktailSoup}
⬥ Non bases are limited to 1 ${Emojis.saraBrew} and 1 solid.
⬥ Solid food is generally not needed for anyone but the base.\n
> __**Potions**__\n
Bring one of each of the following:\n
⬥ ${Emojis.elderOverload} or ${Emojis.elderOverloadSalve} (if you dont want to use ${Emojis.guthixRest} to clear poison).
⬥ ${Emojis.spiritualPrayer} ${Emojis.adrenRenewal} ${Emojis.accelPot}\n
> __**Familiar**__\n
⬥ Bases: ${Emojis.kalgDemon}${Emojis.kalgScroll}
⬥ ${Roles.ironman} Magic roles: ${Emojis.kalgDemon}${Emojis.kalgScroll}
⬥ All other roles: ${Emojis.ripperDemon}${Emojis.ripperScroll}\n
> __**Others**__\n
⬥ Bank Presets for fast banking.
⬥ ${Emojis.limitless} Limitless.
⬥ ${Emojis.ingen} for Ranged roles.
`;

export const mainPerks = `
> __**2H**__\n
⬥ ${Emojis.p6} Precise 6
⬥ ${Emojis.as4} Aftershock 4
⬥ For ${Emojis.scythe} ${Emojis.p6} and ${Emojis.as1} is acceptable.\n
> __**Mainhand (Dual Wield)**__\n
⬥ ${Emojis.as4} Aftershock 4\n
> __**Offhand (Dual Wield)**__\n
⬥ ${Emojis.p6} Precise 6\n
> __**Armour**__\n
⬥ ${Emojis.b4} Biting 4
⬥ ${Emojis.imp4} Impatient 4
⬥ ${Emojis.crack4} Crackling 4
⬥ ${Emojis.r5} Relentless 5
`;

export const switches = `
> __**Flanking**__\n
⬥ ${Emojis.flanking} or a combo on a Tier 80+ Off Hand.
⬥ ${Emojis.flanking} ${Emojis.as4} on a Tier 88+ 2H.\n
> __**Planted Feet**__\n
⬥ ${Emojis.plantedFeet} on any weapon.
⬥ ${Emojis.as1} or higher must be equipped at the same time.
⬥ Not required if ${Emojis.greaterSun} and ${Emojis.greaterDeathSwiftness} are owned.\n
> __**Bladed Dive**__\n
⬥ Mainhand: ${Emojis.as1} or higher.
⬥ Offhand: ${Emojis.mobile} only if armour does not have it.\n
`;

export const relics = `
> The minimum required Archaeology level is **95**.\n
2 of the following relics are required:\n
⬥ ${Emojis.berserkersFury} Berserker's Fury
⬥ ${Emojis.furyOfTheSmall} Fury of the Small
⬥ ${Emojis.heightenedSenses} Heightened Senses
⬥ ${Emojis.conservationOfEnergy} Conservation of Energy
At 120 Archaeology, some of the following combinations are viable:\n
⬥ ${Emojis.berserkersFury} ${Emojis.conservationOfEnergy} ${Emojis.fontOfLife}
⬥ ${Emojis.berserkersFury} ${Emojis.heightenedSenses} ${Emojis.fontOfLife}
`;

export const mageBase = `
> __**Helm/Chestplate/Legs**__\n
Any combination of the following:\n
⬥ ${Emojis.zurielHood} ${Emojis.zurielBody} ${Emojis.zurielBottom} Superior Zuriel
⬥ ${Emojis.virtusMask} ${Emojis.virtusBody} ${Emojis.virtusLegs} Virtus
⬥ ${Emojis.serenHelm} ${Emojis.serenBody} ${Emojis.serenLegs} Refined Seren
⬥ ${Emojis.cryptHelm} ${Emojis.cryptBody} ${Emojis.cryptLegs} Cryptbloom
⬥ ${Emojis.tectonicMask} ${Emojis.tectonicBody} ${Emojis.tectonicLegs} Tectonic
⬥ ${Emojis.eliteTectonicMask} ${Emojis.eliteTectonicBody} ${Emojis.eliteTectonicLegs} Elite Tectonic\n
> __**Weapons**__\n
One of the following weapon sets:\n
⬥ ${Emojis.fsoa} Fractured Staff of Armadyl
⬥ ${Emojis.seisWand} ${Emojis.seisSing} Seismics
⬥ ${Emojis.praesWand} ${Emojis.impCore} Praesuls\n
> __**Gloves**__\n
⬥ ${Emojis.cryptGloves} Cryptbloom gloves\n
⬥ ${Emojis.dtb} Deathtouched bracelet\n
> __**Boots**__\n
⬥ ${Emojis.blastDiffusionBoots} Blast Diffusion Boots\n
> __**Necklace**__\n
⬥ ${Emojis.hammer} ${Emojis.eof}
⬥ ${Emojis.gstaff} ${Emojis.eof}\n
> __**Rings**__\n
It is expected you have ${Emojis.vigour} passive and one of the following rings:\n
⬥ ${Emojis.reaversRing} Reaver's Ring
⬥ ${Emojis.channelersRing} Channeler's Ring\n
> __**Pocket**__\n
⬥ ${Emojis.grim} Erethdor's Grimoire\n
> __**Aura**__\n
⬥ ${Emojis.mani} Maniacal\n
> __**Cape**__\n
Any of the following:\n
⬥ ${Emojis.kalMej} Igneous Kal-Mej
⬥ ${Emojis.kalZuk} Igneous Kal-Zuk\n
> __**Other**__\n
⬥ ${Emojis.gconc} Greater Concentrated Blast
⬥ ${Emojis.flanking} Flanking
⬥ ${Emojis.plantedFeet} or ${Emojis.greaterSun}
⬥ The ability to ${Emojis.smokecloud}
⬥ ${Emojis.affliction} T99 Magic Prayer\n
`;

export const mageEnt = `
> __**Helm/Chestplate/Legs**__\n
Any combination of the following:\n
⬥ ${Emojis.zurielHood} ${Emojis.zurielBody} ${Emojis.zurielBottom} Superior Zuriel
⬥ ${Emojis.virtusMask} ${Emojis.virtusBody} ${Emojis.virtusLegs} Virtus
⬥ ${Emojis.serenHelm} ${Emojis.serenBody} ${Emojis.serenLegs} Refined Seren
⬥ ${Emojis.tectonicMask} ${Emojis.tectonicBody} ${Emojis.tectonicLegs} Tectonic
⬥ ${Emojis.eliteTectonicMask} ${Emojis.eliteTectonicBody} ${Emojis.eliteTectonicLegs} Elite Tectonic\n
> __**Weapons**__\n
One of the following weapon sets:\n
⬥ ${Emojis.fsoa} Fractured Staff of Armadyl
⬥ ${Emojis.seisWand} ${Emojis.seisSing} Seismics
⬥ ${Emojis.praesWand} ${Emojis.impCore} Praesuls\n
> __**Gloves**__\n
⬥ ${Emojis.dtb} Deathtouched bracelet\n
> __**Boots**__\n
⬥ ${Emojis.blastDiffusionBoots} Blast Diffusion Boots\n
> __**Necklace**__\n
⬥ ${Emojis.gstaff} ${Emojis.eof} Essence of Finality amulet\n
> __**Rings**__\n
It is expected you have ${Emojis.vigour} passive and one of the following rings:\n
⬥ ${Emojis.reaversRing} Reaver's Ring
⬥ ${Emojis.channelersRing} Channeler's Ring\n
> __**Pocket**__\n
⬥ ${Emojis.grim} Erethdor's Grimoire\n
> __**Aura**__\n
⬥ ${Emojis.mani} Maniacal\n
> __**Cape**__\n
Any of the following:\n
⬥ ${Emojis.kalMej} Igneous Kal-Mej
⬥ ${Emojis.kalZuk} Igneous Kal-Zuk\n
> __**Other**__\n
⬥ ${Emojis.gconc} Greater Concentrated Blast
⬥ ${Emojis.flanking} Flanking
⬥ ${Emojis.plantedFeet} or ${Emojis.greaterSun}
⬥ The ability to ${Emojis.smokecloud}
⬥ ${Emojis.affliction} T99 Magic Prayer\n
`;

export const meleeEnt = `
> __**Helm/Chestplate/Legs**__\n
A combination of the following:\n
⬥ ${Emojis.tmwHelm} ${Emojis.tmwBody} ${Emojis.tmwLegs} Trimmed Masterwork
⬥ ${Emojis.vestmentHood} ${Emojis.vestmentTop} ${Emojis.vestmentBottoms} Vestments of Havoc\n
> __**Weapons**__\n
**ALL** of the following weapon sets:\n
⬥ ${Emojis.zgs} or ${Emojis.ezk}
⬥ ${Emojis.khopMH} ${Emojis.khopOH} or ${Emojis.lengMH} ${Emojis.lengOH}
⬥ ${Emojis.scythe} Scythe\n
> __**Gloves**__\n
⬥ ${Emojis.dtb} Deathtouched bracelet\n
> __**Boots**__\n
One of the following:\n
⬥ ${Emojis.tmwBoots} Trimmed Masterwork
⬥ ${Emojis.vestmentBoots} Vestments of Havoc
⬥ ${Emojis.lacerations} Laceration Boots\n
> __**Necklace**__\n
⬥ ${Emojis.eof} Essence of Finality amulet\n
> __**Rings**__\n
It is expected you have ${Emojis.vigour} passive and one of the following rings:
⬥ ${Emojis.reaversRing} Reaver's Ring
⬥ ${Emojis.rod} Ring of Death\n
> __**Pocket**__\n
⬥ ${Emojis.grim} Erethdor's Grimoire\n
> __**Aura**__\n
⬥ ${Emojis.berserker} Berserker\n
> __**Cape**__\n
Any of the following:\n
⬥ ${Emojis.kalKet} Igneous Kal-Ket
⬥ ${Emojis.kalZuk} Igneous Kal-Zuk\n
> __**Other**__\n
⬥ ${Emojis.flanking} Flanking
⬥ ${Emojis.greaterBarge} Greater Barge
⬥ ${Emojis.greaterFlurry} Greater Flurry
⬥ ${Emojis.malevolence} T99 Melee Prayer\n
`;

export const rangedEnt = `
> __**Helm/Chestplate/Legs**__\n
A combination of the following:\n
⬥ ${Emojis.morrCoif} ${Emojis.morrBody} ${Emojis.morrChaps} Superior Morrigan
⬥ ${Emojis.pernixCowl} ${Emojis.pernixBody} ${Emojis.pernixChaps} Pernix
⬥ ${Emojis.zamorakHelm} ${Emojis.zamorakBody} ${Emojis.zamorakLegs} Refined Zamorak
⬥ ${Emojis.sirenicMask} ${Emojis.sirenicBody} ${Emojis.sirenicLegs} Sirenic
⬥ ${Emojis.eliteSirenicMask} ${Emojis.eliteSirenicBody} ${Emojis.eliteSirenicLegs} Elite Sirenic\n
> __**Weapons**__\n
**ALL** of the following weapon sets:\n
⬥ ${Emojis.ecb} or ${Emojis.bolg}
⬥ ${Emojis.ascMH} ${Emojis.ascOH} or ${Emojis.blightMH} ${Emojis.blightOH}\n
> __**Gloves**__\n
One of the following:\n
⬥ ${Emojis.dtb} Deathtouched bracelet
⬥ ${Emojis.nightmares} Nightmare gauntlets\n
> __**Boots**__\n
⬥ ${Emojis.fleetings} Fleeting boots\n
> __**Necklace**__\n
⬥ ${Emojis.ecb} ${Emojis.eof} if no physical ${Emojis.ecb}
⬥ ${Emojis.sgbEof} ${Emojis.eof}
⬥ ${Emojis.dbow} ${Emojis.eof}\n
> __**Rings**__\n
It is expected you have ${Emojis.vigour} passive and one of the following rings:\n
⬥ ${Emojis.reaversRing} Reaver's Ring
⬥ ${Emojis.stalkersRing} Stalker's Ring
⬥ ${Emojis.rod} Ring of Death\n
> __**Pocket**__\n
⬥ ${Emojis.grim} Erethdor's Grimoire\n
> __**Aura**__\n
⬥ ${Emojis.reckless} Reckless\n
> __**Cape**__\n
Any of the following:\n
⬥ ${Emojis.kalXil} Igneous Kal-Xil
⬥ ${Emojis.kalZuk} Igneous Kal-Zuk\n
> __**Other**__\n
⬥ ${Emojis.grico} Greater Ricochet
⬥ ${Emojis.caroming4} on ${Emojis.ecb} or ${Emojis.blightOH}
⬥ ${Emojis.flanking} Flanking
⬥ ${Emojis.plantedFeet} or ${Emojis.greaterDeathSwiftness}
⬥ ${Emojis.desolation} T99 Ranged Prayer
⬥ Completed Elite Seers Village Diary
⬥ ${Emojis.fulArrow} ${Emojis.deathspore} if using a Bow
⬥ ${Emojis.rubyBak} ${Emojis.hydrixBak} if using a Crossbow
⬥ ${Emojis.ingen} Ingenuity of the Humans
`;

export const chinner = `
> __**Helm/Chestplate/Legs**__\n
A combination of the following:\n
⬥ ${Emojis.morrCoif} ${Emojis.morrBody} ${Emojis.morrChaps} Superior Morrigan
⬥ ${Emojis.pernixCowl} ${Emojis.pernixBody} ${Emojis.pernixChaps} Pernix
⬥ ${Emojis.zamorakHelm} ${Emojis.zamorakBody} ${Emojis.zamorakLegs} Refined Zamorak
⬥ ${Emojis.sirenicMask} ${Emojis.sirenicBody} ${Emojis.sirenicLegs} Sirenic
⬥ ${Emojis.eliteSirenicMask} ${Emojis.eliteSirenicBody} ${Emojis.eliteSirenicLegs} Elite Sirenic\n
> __**Weapons**__\n
**ALL** of the following weapon sets:\n
⬥ ${Emojis.ecb} or ${Emojis.bolg}
⬥ ${Emojis.ascMH} ${Emojis.ascOH} or ${Emojis.blightMH} ${Emojis.blightOH}\n
> __**Gloves**__\n
One of the following:\n
⬥ ${Emojis.dtb} Deathtouched bracelet
⬥ ${Emojis.nightmares} Nightmare gauntlets\n
> __**Boots**__\n
⬥ ${Emojis.fleetings} Fleeting boots\n
> __**Necklace**__\n
⬥ ${Emojis.ecb} ${Emojis.eof} if no physical ${Emojis.ecb}
⬥ ${Emojis.hammer} ${Emojis.eof}
⬥ ${Emojis.sgbEof} ${Emojis.eof}
⬥ ${Emojis.dbow} ${Emojis.eof}
⬥ ${Emojis.decimation} ${Emojis.eof} if executing the Decimation rotation\n
> __**Rings**__\n
It is expected you have ${Emojis.vigour} passive and one of the following rings:\n
⬥ ${Emojis.reaversRing} Reaver's Ring
⬥ ${Emojis.stalkersRing} Stalker's Ring
⬥ ${Emojis.rod} Ring of Death\n
> __**Pocket**__\n
⬥ ${Emojis.grim} Erethdor's Grimoire\n
> __**Aura**__\n
⬥ ${Emojis.reckless} Reckless\n
> __**Cape**__\n
Any of the following:\n
⬥ ${Emojis.kalXil} Igneous Kal-Xil
⬥ ${Emojis.kalZuk} Igneous Kal-Zuk\n
> __**Other**__\n
⬥ ${Emojis.grico} Greater Ricochet
⬥ ${Emojis.caroming4} on ${Emojis.ecb} or ${Emojis.blightOH}
⬥ ${Emojis.flanking} Flanking
⬥ ${Emojis.plantedFeet} or ${Emojis.greaterDeathSwiftness}
⬥ ${Emojis.desolation} T99 Ranged Prayer
⬥ Completed Elite Seers Village Diary
⬥ ${Emojis.fulArrow} ${Emojis.deathspore} if using a Bow
⬥ ${Emojis.rubyBak} ${Emojis.hydrixBak} if using a Crossbow
⬥ ${Emojis.ingen} Ingenuity of the Humans
`;