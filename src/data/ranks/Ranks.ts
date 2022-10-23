import { Channels, Roles, TextUtils, Emojis } from "../../Utils";

// General
export const startingMessage = `
The ranking system in Nex AoD FC is based on merit acquired through achieving certain tiers of roles. Getting any role is optional, and you have the right to request their removal.
`;

// DPS Ranks
export const dpsInfo = `
⬥ All DPS Role submissions require a **FULL** 7/7 FC Team on roles they have earned.\n
⬥ 2 Challenge Gem screenshots are required to apply for Adept/Mastery/Extreme roles.\n
⬥ Screenshots must demonstrate achieving the required DPS threshold.\n
⬥ Solo base gems require 2 additional vouches (indicating correct handling of mechanics).\n
⬥ ${Roles.mainTrialHost}+ are able to vouch a gem's authenticity if a screenshot is missing a requirement provided they were in the kill.\n
⬥ If a gem score is met with negative feedback ${Roles.organiser}+ reserve the right to disregard the submission.\n
⬥ Screenshots are to be submitted in <#${Channels.applyForRank}> with the following conditions:
${TextUtils.subpoint} The screenshot must display your whole RuneScape **Client interface**.
${TextUtils.subpoint} The screenshot must display your **equipment tab**.
${TextUtils.subpoint} The screenshot must contain the **challenge gem scoreboard**.
${TextUtils.subpoint} At least **two** other team members must be in the Challenge Gem.\n
⬥ ${Roles.extreme} and ${Roles.mastery} roles will be given when any corresponding variant is achieved.\n
⬥ The following requirements exclude the need of ${Roles.magicEnt}:
${TextUtils.subpoint} ${Roles.archAngel} is awarded for achieving all Adept roles.
${TextUtils.subpoint} ${Roles.aodMaster} is awarded for achieving all ${Roles.mastery} roles or 1 ${Roles.extreme} rank in each role.
${TextUtils.subpoint} ${Roles.deathDestroyer} is awarded for achieving ${Roles.extreme} in all roles.\n
> Submissions which do not fulfill these requirements will not be accepted.
`;

// Ingame Ranks
export const ingame = `
> Ingame FC roles are assigned for administration purposes.\n
${Emojis.smiley} - ${Roles.member}
${Emojis.recruit} - ${Roles.extreme}
${Emojis.corporal} - ${Roles.trialTeam}
${Emojis.sergeant} - ${Roles.applicationTeam}
${Emojis.lieutenant} - ${Roles.mainTrialHost}
${Emojis.captain} - ${Roles.organiser}
${Emojis.general} - ${Roles.coOwner}
`;

// Other Ranks
export const other = `
⬥ ${Roles.ofThePraesul} - Unlocked the base collection log.
⬥ ${Roles.truePraesul} - Unlocked the golden collection log.
⬥ ${Roles.streamer}
${TextUtils.noSpaceSubPoint} 50 follower requirement.
${TextUtils.noSpaceSubPoint} Automatically posts in <#${Channels.streamers}> when you are live.
${TextUtils.noSpaceSubPoint} Contact an ${Roles.organiser}+ for this role. 
`;

