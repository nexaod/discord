import { Emojis, Channels, Roles, TextUtils } from "../Utils";

// General
export const generalRules = `
⬥ Follow all of Jagex's [Rules of RuneScape](https://www.runescape.com/game-guide/rules).\n
⬥ English is the only language to be used inside Nex AoD FC/Discord.\n
⬥ Advertising other FCs/Discords is prohibited.\n
⬥ Promoting staking/gambling is prohibited.\n
⬥ If you leave the Discord server, there is a 1 week grace period to rejoin, otherwise you will be removed.\n
⬥ You are only allowed to do roles in FC teams for which you have the tag in discord.\n
⬥ Having Adept/Mastery/Extreme variants of standard roles also counts as proof to do a corresponding role.\n
⬥ Having ${Roles.cdar} is also considered as proof (awarded from obtaining all Ent and Base variants, as well as ${Roles.chinner} and ${Roles.meleeFree}).
`

// Behavioural
export const behavioural = `
⬥ A decent attitude, an open mind, and a drive to improve is required.\n
⬥ No bullying, verbal abuse, putting people down or naming and shaming other players in any form, no matter what happened, both in-game and in discord. This also includes flaming other discords.\n
⬥ No posting obscene or offensive content, buying and selling items, sharing sensitive private conversations, or reporting people publicly, both in-game and in discord\n
⬥ Humility must be practiced. Arrogant behavior will quickly find its way outside the FC.\n
⬥ Racism, or seriously offensive language will not be allowed, even if it was not directed at anyone.\n
⬥ Putting down the team due to mistakes occurring will not be tolerated. Providing feedback during kills in a constructive manner is appreciated and expected, as is taking that feedback to heart.\n
⬥ Quitting kills out of frustration mid-way will result in removal from the FC, unless you find a replacement and leave only when they are able to join the kills so there is no down-time for the team.
`

// Reports
export const reporting = `
⬥ If you have a problem with another FC member (be it behavior or performance), please make a report [here](https://forms.gle/KjFnTvG88WEmgjUJ8).\n
⬥ Note that all reports are by default anonymous. If your identity is required to resolve an issue, we will give you the option whether or not to do so.\n
`

// Team Forming
export const teamForming = `
⬥ Teams must be formed on non-lootshare worlds.\n
⬥ It is not allowed to invite ANYONE that is not added to the FC as a ${Emojis.smiley}+. Teams formed in the FC must be 100% from the FC. Failure to comply with this rule will result in a removal from the FC. It doesn't matter if there aren't enough people to go. You can't take anyone that isn't already added to the FC.\n
⬥ Note that all reports are by default anonymous. If your identity is required to resolve an issue, we will give you the option whether or not to do so.\n
⬥ Invitations are first come first serve.\n
⬥ Invitations based on personal preference are not allowed.\n
⬥ Adding FC members to your ignore list is not allowed as it causes the following problems:
${TextUtils.subpoint} You will be unable to see their request to be invited to a team.
${TextUtils.subpoint} They will be unable to join your instance.
${TextUtils.subpoint} You will be unable to see their calls during the boss fight.\n
⬥ The grouping system must be used to invite players.\n
⬥ When asking for an invite to the group, you must clarify what role you will be taking (i.e., \`inv chin\` or \`inv any\`). If non-compliance leads to any problems, you are the last in line to pick.\n
⬥ If you are hosting a group, you must clarify what roles are still open (e.g., +4 base/ents/chin). Clarifying which roles are taken (e.g., +6 -chin) is also possible.\n
⬥ Do not call minions until the team has filled. Magic ents default to Umbra.\n
⬥ Once a team fills that you are a part of, it is expected for you to be at nex bank and ready within 5 minutes. If you are not ready within 5 minutes of the team filling, the team is allowed (not required) to kick you.\n
⬥ If a team wishes to retire, at least 4 members of the team must be willing to do so, otherwise the hour will continue. 
`

// Splitting
export const splitting = `
⬥ The unique drops splitting system that is used in Nex AoD FC is **CK (Chest Keep)**. No other system is allowed in the FC for standard teams.\n
⬥ Teams with ${Roles.ironman} players are allowed to do keeps for the ironman players only, provided all teammates agree to those rules.\n
⬥ The Base Tank and ${Emojis.umbra} (or Primary Vulner) receive the following tips:
${TextUtils.subpoint} Base Tank: 8M for every unique drop.
${TextUtils.subpoint} ${Emojis.umbra}/Primary Vulner: 3M for every unique drop.\n
⬥ All splits should be calculated using either the \`-splitnexaod\` command in <#${Channels.bot}>, or the [Alt1 BetterAoD](https://runeapps.org/forums/viewtopic.php?id=1324) calculator.\n
⬥ Always pick up your drop off the floor. Failure to do so will require you to split the team out of your own money.\n
⬥ Sell responsibly on the Grand Exchange. If you disregard this rule and sell for significantly under guide price you will be required to compensate the team.\n
⬥ If requested, you must post a screenshot of your Grand Exchange history.\n
⬥ If a player dies before being able to loot the drop, they are required to inform the team immediately by spamming the chat. If the team does not stay to save the drop, nobody can be reported for that.\n
⬥ If an item is over max cash, the following rules must be respected:
${TextUtils.subpoint} Anyone on the team who does not want to wait for a W2 sale can request a max cash/7 split (2136M/7 + any tips).
${TextUtils.subpoint} Any remaining members who want to wait for a w2 split will split the remaining money evenly.
${TextUtils.subpoint} If the person who received the drop does not want to sell over max cash but others do, the others must buy the drop out with the above rules.
${TextUtils.subpoint} A screenshot of a W2 trade is required to prevent any potential problems.
${TextUtils.subpoint} A calculator to help with max cash/W2 trades can be found [here](https://docs.google.com/spreadsheets/d/1Bts8t65HXtcc9YdOnwpiUTwTxl5YBYRfN6mpwwBRMoI/edit#gid=0).
`

// Dummies
export const dummies = `
> These rules are the default FC rules. If there is prior discussion within a team, dummies and instance host can be done by anybody.\n
⬥ ${Roles.chinner}/${Roles.mrHammer} is expected to host instance and the host ${Emojis.dummy}.\n
⬥ ${Roles.magicBase}/${Roles.mrBase} are encouraged to bring their own ${Emojis.dummy}.\n
⬥ The **Free** role is expected to place the 1.8/South ${Emojis.dummy}.\n
⬥ If a Magic/Ranged role is on the team, they are expected to place ${Emojis.dummy} under the boss.\n
⬥ Under the circumstance that there is a ${Roles.mrFree}, the host of the 1.8/South ${Emojis.dummy} **must** take the following priority:
${TextUtils.subpoint} Single style camp (e.g. ${Roles.magicEnt})
${TextUtils.subpoint} Magic/Melee Hybrid
${TextUtils.subpoint} Magic/Ranged Hybrid
`

// Causing Deaths
export const deaths = `
If you cause a team members death due to:\n
⬥ Not moving your Smoke away from other team members, and/or not calling it.\n
⬥ Placing a Pulse Bomb in the middle, or in a very poorly placed area (that almost instantly damages others).\n
⬥ Any other reason where you're directly responsible for your teammate's death.\n
You are obligated to pay the coins they spent to recover their items from Death.
`

// Challenge Gems
export const gems = `
⬥ Any team member is allowed to drop (and enforce) a challenge gem if a minimum of 2 kills took more than 1:50 minutes, where 7/7 of the team members survived. Joining that Challenge Gem will be mandatory under that circumstance. Team members who refuse to do so will be removed from the FC.\n
⬥ A hop to reset the Challenge Gem can be requested provided 4/7 members of the team agree.\n
⬥ A second hop to reset the Challenge gem can be requested provided 7/7 members of the team agree.\n
⬥ Mechanics should still be performed to FC standards during a Challenge Gem (i.e. players should not leave earlier than normal for pillars).\n
⬥ If a ${Roles.magicBase} is using ${Emojis.cryptHelm} ${Emojis.cryptBody} ${Emojis.cryptLegs} ${Emojis.cryptGloves}, team member gems are invalidated and only the base gem counts.\n
⬥ A codeword is needed to validate the current meta and should be in the chatbox of a screenshot.\n
> The current codeword is \`fsoa\`.
`

// Administration Team
export const admin = `
> ${Roles.organiser} and ${Roles.coOwner}\n
⬥ Handle adds to the Nex AoD FC account.\n
⬥ Approve submissions in <#${Channels.applyForRank}>.\n
⬥ Activity checks and updating FC information.\n
⬥ Handle complaints, reports and issuing punishments.\n
⬥ Manage all other Administration Teams.\n
> ${Roles.mainTrialHost}\n
⬥ Managing Trial Schedule.\n
⬥ Forming trial groups in game, setting Challenge Gem and managing team roles.\n
⬥ Making calls during the hour and screenshotting the resultant Challenge Gem.\n
⬥ Messaging a trialee and providing feedback.\n
⬥ Giving the trialee the corresponding roles if they passed their trial.\n
⬥ Making a trial report.\n
⬥ Hosting scouted hours (non scheduled trial hours) and informing the rest of the administration team about scouted hours.\n
⬥ Have the ability to request any member to join a gem, or provide any amount of gems.\n
> ${Roles.applicationTeam}\n
⬥ Checking the applications of players wishing to join the FC or existing FC members wishing to apply for another role, and assigning them ${Roles.readyForTrial} if applicable.\n
⬥ Giving feedback to applicants if their application is unsuccessful.\n
> ${Roles.trialTeam}\n
⬥ Mock Trial and Trial attendees.\n
⬥ Helping fill teams and providing consistent kills.\n
⬥ Providing feedback about a trialees performance.\n
> If you are interested in ${Roles.trialTeam} or ${Roles.applicationTeam} please apply [here](https://forms.gle/XcYN84eMVuGAt5mQ6).
`
