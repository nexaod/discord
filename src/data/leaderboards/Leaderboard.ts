import { Channels, Roles } from "../../Utils";

// General
export const startingMessage = `
> __**Gem Scores**__\n
⬥ Players can only be on the leaderboard once per role, even if they would hold multiple spots on it (i.e. be #1 and #2).\n
⬥ Only 2K Gems from **FULL** (7/7) FC teams are accepted. Gems will be denied for smaller team sizes.\n
⬥ There must be at least 3 people from the team in the gem UNLESS a ${Roles.mainTrialHost}+ can vouch for the validity of the gem.\n
⬥ Submitted role gems must at least qualify for the corresponding ${Roles.extreme} role.\n
> __**Kill Times**__\n
⬥ Only full (7/7) FC teams count.\n
⬥ A screenshot of the full client interface with the group interface with 7/7 members showing is required.\n
⬥ You can apply for a spot on the leaderboard via the <#${Channels.applyForRank}> channel.\n
`;