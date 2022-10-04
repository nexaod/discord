import { Emojis, Channels, Roles, TextUtils } from "../Utils";

export const generalExpectations = `
> These expectations apply to all roles and combat styles.\n
⬥ A bank preset is required and **quick banking** is expected between kills. Slow banks are frowned upon and may result in retrial.\n
⬥ The **Chinner** or **Base** is required to place the starting dummy.\n
⬥ All ents are required to ${Emojis.vulnBomb} their ${Emojis.amalg}.\n
⬥ You are required to ${Emojis.vulnBomb} your minion as ${Emojis.umbra} or ${Emojis.glacies} tank.\n
⬥ ${Emojis.dommines} are not needed.\n
⬥ Stall adrenaline before and between kills.\n
⬥ Disassemble any dummies you use to build adrenaline.\n
⬥ Regain adrenaline on your own if you died during a kill (preferably with Wars Retreat crystal).\n
⬥ ${Emojis.ripperDemon}${Emojis.ripperScroll} is required with the following exceptions:
${TextUtils.subpoint} Magic Base (${Emojis.kalgDemon}${Emojis.kalgScroll})
${TextUtils.subpoint} Ironmen Magic Roles (${Emojis.kalgDemon}${Emojis.kalgScroll})\n
⬥ Rotations are expected to be followed and can be found under **Guides**.\n
⬥ If ${Emojis.kalgDemon}${Emojis.kalgScroll} is being used, you are expected to ${Emojis.callFamiliar} before speccing.\n
⬥ If ${Emojis.ripperDemon}${Emojis.ripperScroll} is being used, you are expected to use ${Emojis.spiritualPrayer} and spec.\n
⬥ Bombs are expected to be placed correctly and not affect teammates.\n
⬥ 300K Minions are not acceptable. Doing this more than once in an hour will result in retrial.\n
⬥ Minions are expected to be lured quickly, and fixed if mislured. A guide for both can be found in <#${Channels.additionalInfo}>.
`

// Magic Entangle
export const magicEnt = `
> A **5.5M** minimum damage threshold is expected in 30 minutes through a 2K Challenge Gem.\n
⬥ ${Emojis.mani} is the only allowed aura.\n
⬥ You can trial as either ${Emojis.umbra} or ${Emojis.glacies}.\n
⬥ A 15% ${Emojis.detonate} (from losing target on ${Emojis.dummy}) is required on P2 to hit both ${Emojis.amalg} and ${Emojis.nex}.\n
⬥ Do not stand melee distance of ${Emojis.umbra} pillar, as meleers might get hit by potential shadows.\n
⬥ We strongly recommend you ${Emojis.magic}/${Emojis.melee} Hybrid.
`

// Melee Entangle
export const meleeEnt = `
> A **5.1M** minimum damage threshold is expected in 30 minutes through a 2K Challenge Gem.\n
⬥ ${Emojis.berserker} is the only allowed aura.\n
⬥ You must trial as ${Emojis.glacies}.\n
⬥ ${Emojis.greaterBarge} and ${Emojis.greaterFlurry} is required.\n
⬥ It is highly recommended to utilise ${Emojis.scythe}${Emojis.hurricane} on P2 to hit both ${Emojis.amalg} and ${Emojis.nex}.\n
⬥ It is highly recommended to utilise ${Emojis.scythe}${Emojis.cleave} on P3 to help clear minions.\n
⬥ ${Emojis.dragonBattleAxe} at Adrenaline Crystal and be in time for P1.\n
⬥ To obtain ${Roles.meleeUmbra} a trial is required, or ${Roles.meleeEnt} and Umbra in any other style.\n
⬥ A knowledge of when to ${Emojis.zerk} is required (i.e. -1.2s).\n
⬥ We strongly recommend you ${Emojis.magic}/${Emojis.melee} Hybrid.
`

// Ranged Entangle
export const rangedEnt = `
> A **5.4M** minimum damage threshold is expected in 30 minutes through a 2K Challenge Gem.\n
⬥ ${Emojis.reckless} is the only allowed aura.\n
⬥ You must trial as ${Emojis.glacies}.\n
⬥ ${Emojis.grico} is required.\n
⬥ It is highly recommended to utilise ${Emojis.sgbEof}${Emojis.eofSpec} on P3 with one of the following methods:
${TextUtils.subpoint} ${Emojis.chin} if using a standard Ranged rotation or if minions are dying slow.
${TextUtils.subpoint} ${Emojis.decimation}${Emojis.eofSpec} otherwise.\n
⬥ Finish the kill with 70%+ Adrenaline before banking.\n
⬥ If you plan to get Adrenaline at Wars Retreat, be on time to the instance.\n
`

// Magic/Ranged Entangle
export const hybridMageRangedEnt = `
> A **6.5M** minimum damage threshold is expected in 30 minutes through a 2K Challenge Gem.\n
⬥ ${Emojis.mani} is the only allowed aura.\n
⬥ You must trial as ${Emojis.glacies} unless told otherwise.\n
⬥ A trial is required to obtain this role, and a pre-requesite of ${Roles.magicEnt} or ${Roles.rangedEnt}.\n
⬥ ${Emojis.eof} of the following is required: ${Emojis.sgbEof} ${Emojis.ecb} ${Emojis.decimation} ${Emojis.dbow} ${Emojis.gstaff}\n
⬥ An absolute understanding of the fight is expected.\n
⬥ You are expected to be on tick until the end of P3.\n
⬥ If you lose ticks you are expected to adjust yourself to be back on tick.
`

// Chinner
export const chinner = `
> A **5.1M** minimum damage threshold is expected in 30 minutes through a 2K Challenge Gem.\n
⬥ ${Emojis.reckless} is the only allowed aura.\n
⬥ ${Emojis.grico} is required.\n
⬥ ${Emojis.hammer} debuff is expected to be applied as the fight starts.\n
⬥ You are expected to help with ${Emojis.glacies}${Emojis.iceamalg} then a single ability on ${Emojis.cruor}${Emojis.bloodamalg}.\n
⬥ Execution of the ${Emojis.decimation} rotation is recommended.\n
⬥ If a minion is out (but not more than 1 square from center), chinners should consider targeting perfectly centered minions if the minion is not re-lured.\n
⬥ Do not stand melee distance of ${Emojis.umbra} pillar, as meleers might get hit by potential shadows.\n
⬥ If the base dies or disconnects, chinners are expected to back-up base tank.\n
`

// Free
export const free = `
> Free roles are assigned from passing the corresponding Entangle trial.\n
⬥ You are expected to help with ${Emojis.umbra}${Emojis.amalg} and${Emojis.fumus}${Emojis.smokeamalg}.\n
⬥ Movement requires no minions to be blocked.\n
⬥ The 1.8/South ${Emojis.dummy} is required for traditional Free roles.\n
⬥ Magic/Ranged Hybrids are required to place ${Emojis.dummy} underneath ${Emojis.nex} during P2.\n
`

// Base
export const base = `
> A **4.3M** minimum damage threshold is expected for a Magic Base in 30 minutes through a 2K Challenge Gem. Hybrid styles are also accepted.\n
⬥ ${Emojis.mani} is the only allowed aura.\n
⬥ Position yourself so the boss does not move until the 600K phase.\n
⬥ Start the kill at 15 seconds on your sunshine, or adjust accordingly to the speed of the kill.\n
⬥ If there are meleers (non hybrids) apply ${Emojis.gstaff} as your first or third ability after ${Emojis.detonate}.\n
⬥ Apply ${Emojis.smokecloud} on P1.\n
⬥ Help ${Emojis.glacies}${Emojis.iceamalg} on P2, then ${Emojis.cruor}${Emojis.bloodamalg}.
${TextUtils.subpoint} ${Emojis.glacies}${Emojis.iceamalg} - ${Emojis.nami} ${Emojis.dbreath} (Both abilities should also hit ${Emojis.nex}).
${TextUtils.subpoint} ${Emojis.cruor}${Emojis.bloodamalg} - ${Emojis.gconc} or other abilities until dead.\n
⬥ Lure the boss away at 650-680K Lifepoints without giving shadows.\n
⬥ Apply ${Emojis.hammer}${Emojis.smokecloud} to ${Emojis.nex} at 600K.\n
⬥ ${Emojis.vulnBomb} the last pillar.\n
`

// Other Information
export const other = `
⬥ ${Roles.ironman} players are expected to have an associated main account that is able to split drops.
${TextUtils.subpoint} A minimum of 1 max cash is expected to always be ready to split. If your drops exceed this, a grace period of 1 day is given.
${TextUtils.subpoint} All team members must agree to allowing the Ironman to do keeps if a keeps/split team is formed.
${TextUtils.subpoint} Any Ironman that is unable to split a drop will be given the opportunity to drop trade - else be labelled a scammer.
${TextUtils.subpoint} Ironmen should set their Discord nickname to include both their accounts.\n
> If you are applying for a role, read the corresponding information for a role, then type **?nexaod** in <#${Channels.readingConfirmation}>. Note: Your Discord DMs must be on to accept messages from users in mutual servers.
`