import { TextChannel, EmbedBuilder } from "discord.js";

const environment = process.env.ENVIRONMENT === 'PRODUCTION' ? 'PRODUCTION' : 'DEVELOPMENT';

export const purgeChannel = async (channel: TextChannel) => {
    const messages = await channel.messages.fetch({ limit: 100 });
    for await (const [_id, message] of messages) {
        await message.delete();
    }
}

export const Colours = {
    green: 2067276,
    aqua: 1146986,
    blue: 2123412,
    red: 10038562,
    lightgrey: 10070709,
    gold: 12745742,
    default: 5198940,
    lightblue: 302332,
    darkgrey: 333333,
    purple: 11607689,
    lightpurple: 10181046,
}

export const Emojis = {
    gem1: '<:gem1:1024939203160711209>',
    gem2: '<:gem2:1024939217895297084>',
    gem3: '<:gem3:1024939228527853649>',
    malevolence: '<:malevolence:513190159416557573>',
    voke: '<:voke:535541259465392143>',
    chin: '<:mechchin:641669268722810881>',
    umbra: '<:umbra:1025086079319162880>',
    glacies: '<:glacies:1025086094775177297>',
    cruor: '<:cruor:1025085871772409937>',
    fumus: '<:fumus:1025086111262982237>',
    freedom: '<:freedom:535541258240786434>',
    dommines: '<:dommine:662249620579155968>',
    ripperDemon: '<:ripperpouch:703581275453128714>',
    ripperScroll: '<:ripperscroll:703581275155464203>',
    kalgDemon: '<:kalgpouch:921410226484301925>',
    kalgScroll: '<:kalgscroll:841409588954923049>',
    mammoth: '<:Mammoth:513195712146702337>',
    mammothScroll: '<:mammothscroll:1025428178111578182>',
    callFamiliar: '<:callfollower:933299003121078332>',
    spiritualPrayer: '<:spiritualprayer:651079281882955787>',
    mani: '<:mani:643505153709965322>',
    berserker: '<:berserker:643505116347105290>',
    vulnBomb: '<:vulnbomb:655341074235129858>',
    amalg: '<:shadowamalg:878739232951255091>',
    magic: '<:Magic:689504724159823906>',
    melee: '<:melee:615612332521029632>',
    dummy: '<:dummy:656844963522281473>',
    nex: '<:aod:580167371365548042>',
    detonate: '<:deto:535533833358016512>',
    scythe: '<:noxscythe:513190159341322240>',
    hurricane: '<:cane:535532878969438210>',
    greaterBarge: '<:gbarge:535532879250456578>',
    greaterFlurry: '<:gflurry:535532879283879977>',
    dragonBattleAxe: '<:DBA:603979368850653216>',
    cleave: '<:cleave:535532878616985610>',
    zerk: '<:zerk:535532854004678657>',
    reckless: '<:reckless:643505179378974748>',
    grico: '<:grico:787904334812807238>',
    sgbEof: '<:sgb:626466665848242186>',
    eofSpec: '<:eofspec:746403211908481184>',
    decimation: '<:decimation:643848618477879328>',
    eof: '<:eofor:745279787471470713>',
    ecb: '<:ecb:615618531937222657>',
    gstaff: '<:gstaff:513203008608141314>',
    dbow: '<:dbow:643848618553507843>',
    hammer: '<:swh:641670143197446182>',
    iceamalg: '<:iceamalg:878739231785222154>',
    bloodamalg: '<:bloodamalg:878739232447938670>',
    smokeamalg: '<:smokeamalg:878739232607318086>',
    smokecloud: '<:smokecloud:856635090641879050>',
    dbreath: '<:dbreath:535533833391702017>',
    nami: '<:tsunami:535533809995874304>',
    gconc: '<:gconc:869285393223254107>',
    smiley: '<:friend:1026007098116546590>',
    recruit: '<:Recruit:1026694675312152627>',
    corporal: '<:Corporal:1026694689258209410>',
    sergeant: '<:Sergeant:1026694702361231370>',
    lieutenant: '<:Lieutenant:1026694714096898149>',
    captain: '<:Captain:1026694726033870898>',
    general: '<:General:1026694739132690512>',
    plantedFeet: '<:pf:689501925770919981>',
    flanking: '<:flank4:712073088296157185>',
    as1: '<:as1:689502339891331093>',
    spiritWeedIncenseSticks: '<:SpiritSticks:565726489136463894>',
    weaponPoison: '<:weppoison:689525476158472288>',
    guthixRest: '<:grest:689530593901412578>',
    saraBrew: '<:Brew:565726489400573962>',
    superSaraBrew: '<:supersara:642708771344482314>',
    blubber: '<:blueblubber:689530593742291033>',
    sailfish: '<:Sailfish:565726489363087360>',
    sailfishSoup: '<:sailfishsoup:537336701933060106>',
    rocktailSoup: '<:rocktailsoup:689530594412986389>',
    elderOverload: '<:elderovl:841419289831800882>',
    elderOverloadSalve: '<:elderovlsalve:648976643687317532>',
    adrenRenewal: '<:adrenrenewalflask:736298313980182541>',
    accelPot: '<:accel:756236265472524418>',
    limitless: '<:limitless:641339233638023179>',
    ingen: '<:ingen:641339234111848463>',
    p6: '<:p6:712073088769982475>',
    as4: '<:as4:712074245202772009>',
    b4: '<:biting4:712073087809617931>',
    imp4: '<:imp4:712073088204013640>',
    crack4: '<:crack4:712073087662686249>',
    r5: '<:relentless5:712244800920748092>',
    berserkersFury: '<:berserkersfury:697808774106185768>',
    furyOfTheSmall: '<:furyofthesmall:697808773917573233>',
    heightenedSenses: '<:heightenedsenses:697808773573771344>',
    conservationOfEnergy: '<:conservationofenergy:697808773711921195>',
    fontOfLife: '<:fontoflife:698225967679930408>',
    greaterSun: '<:gsunshine:994644352871714836>',
    greaterDeathSwiftness: '<:gdeathsswift:994644354536837121>',
    mobile: '<:mob:689501908628799488>',
    zurielHood: '<:Superior_Zuriels_hood:1026751746908880947>',
    zurielBody: '<:SuperiorZurielstop:556586037216804864>',
    zurielBottom: '<:SuperiorZurielsrobebottom:556591275604836395>',
    virtusMask: '<:virtusmask:992155942563102852>',
    virtusBody: '<:VirtusTop:556586038936600603>',
    virtusLegs: '<:Virtusrobelegs:556591276036849682>',
    serenHelm: '<:animahelmseren:643120081764745279>',
    serenBody: '<:animabodyseren:923248695846273054>',
    serenLegs: '<:AnimalegsSeren:556592073340485639>',
    tectonicMask: '<:tectmask:643849283199696917>',
    tectonicBody: '<:tectbody:643849268804714506>',
    tectonicLegs: '<:tectlegs:643849257962438656>',
    eliteTectonicMask: '<:elitetectmask:556582803014418432>',
    eliteTectonicBody: '<:elitetectbody:552955120707698699>',
    eliteTectonicLegs: '<:elitetectlegs:580177869272121344>',
    fsoa: '<:soa:869284271595069451>',
    seisWand: '<:seiswand:583429704837758997>',
    seisSing: '<:sing:513190159261630467>',
    praesWand: '<:praeswand:643166769518739477>',
    impCore: '<:impercore:643166751067996160>',
    dtb: '<:DTB:513190159429271562>',
    kalMej: '<:igneouskalmej:902209626408382494>',
    kalKet: '<:igneouskalket:902209626404192316>',
    kalZuk: '<:igneouskalzuk:902209626479685734>',
    kalXil: '<:igneouskalxil:902209626404171786>',
    affliction: '<:Affliction:513190158468907008>',
    grim: '<:grim:568262896375824385>',
    blastDiffusionBoots: '<:detoboots:602581956072439828>',
    reaversRing: '<:reaverring:839903943018283050>',
    channelersRing: '<:channellerring:839903943404027914>',
    tmwHelm: '<:tmwhelm:643847130619969562>',
    tmwBody: '<:tmwbody:536966366272552960>',
    tmwLegs: '<:tmwlegs:643847107186524200>',
    tmwBoots: '<:tmwboots:643847084147081235>',
    vestmentHood: '<:vestmentsofhavochood:994189297659940904>',
    vestmentTop: '<:vestmentsofhavoctop:994189295592161291>',
    vestmentBottoms: '<:vestmentsofhavocbottom:994189293515980902>',
    vestmentBoots: '<:vestmentsofhavocboots:994189291515285544>',
    lacerations: '<:Laceration:602581988599398400>',
    rod: '<:RoD:513190159462825984>',
    vigour: '<:RoV:513201065877831680>',
    zgs: '<:zgs:626465964325601290>',
    ezk: '<:zekkil:903244090953588787>',
    khopMH: '<:khopeshmh:513206794844110858>',
    khopOH: '<:khopeshoh:513206794752098327>',
    lengMH: '<:lengmh:883134308146098227>',
    lengOH: '<:lengoh:883134308070604870>',
    desolation: '<:Desolation:513190159018098713>',
    caroming4: '<:caroming4:791281588792590336>',
    rubyBak: '<:RubyBakri:565726489413287956>',
    hydrixBak: '<:HydrixBakri:550834403136503822>',
    fulArrow: '<:fularrow:971025696958853180>',
    deathspore: '<:deathsporearrows:900758234527301642>',
    blightMH: '<:bbc:626714879218155521>',
    blightOH: '<:bbcoh:626714879230738434>',
    bolg: '<:bolg:994189289623662702>',
    ascMH: '<:ascmh:513190158468775936>',
    ascOH: '<:ascoh:513190159362031631>',
    nightmares: '<:NMG:513190159441723392>',
    fleetings: '<:fleetingboots:789813993480388640>',
    stalkersRing: '<:stalkerring:839903943601029120>',
    pernixCowl: '<:pernixcowl:992155944253411478>',
    pernixBody: '<:pernixbody:641672159051120651>',
    pernixChaps: '<:PernixChaps:556592058891239424>',
    morrCoif: '<:Superior_Morrigans_coif:1026887254959980635>',
    morrBody: '<:SuperiorMorrigansBody:556586036885717012>',
    morrChaps: '<:SuperiorMorrigansChaps:556591276137512961>',
    zamorakHelm: '<:animahelmzam:643120081446109203>',
    zamorakBody: '<:Anima_core_body_of_Zamorak:1026887748503748628>',
    zamorakLegs: '<:Animalegsamorak:556592073374171146>',
    eliteSirenicMask: '<:elitesirenicmask:643846921944956929>',
    eliteSirenicBody: '<:elitesirenicbody:643846908305211413>',
    eliteSirenicLegs: '<:elitesireniclegs:643846897525850165>',
    sirenicMask: '<:sirenicmask:643846959454617610>',
    sirenicBody: '<:sirenicbody:643846948570267648>',
    sirenicLegs: '<:sireniclegs:643846938537623564>',
    quiver: '<:pernixsquiver:902209626450296892>',
    eofPurple: '<:eofpurple:780401412936040478>',
    eofYellow: '<:eofyellow:780401412902223892>',
    abs: '<:armadylbattlestaff:881962727705280512>',
    inciteFear: '<:incitefear:856635090783567902>',
    exsang: '<:exsanguinate:856635090745950258>',
    bloodBarrage: '<:bloodbarrage:537338981747261446>',
    iceBarrage: '<:icebarrage:537340400185245701>',
    spec: '<:spec:537340400273195028>',
    adrenRenewal4: '<:adrenrenewal:736298121704767538>',
    greaterFury: '<:gfury:535532879334080527>',
    magma: '<:magmatempest:902209626509025290>',
    omni: '<:omni:535533809664262179>',
    smokeTendril: '<:smoketendrils:536257336130404372>',
    wildMagic: '<:wm:535533809978966037>',
    asphyx: '<:asphyx:535533833072672778>',
    shard: '<:StormShards:536256663641128971>',
    sonic: '<:sonic:535533809924571136>',
    anticipate: '<:anti:535541306475151390>',
    greaterChain: '<:gchain:787904334495088672>',
    surge: '<:surge:535533810004262912>',
    deepImpact: '<:deep:535533833139912724>',
    impact: '<:impact:535533809655873556>',
    flankIcon: '<:flankicon:841419289755385866>',
    wrackAndRuin: '<:wrackandruin:856662355912032256>',
    tuska: '<:Tuskas:513201065513058306>',
    meta: '<:meta:535533811304497183>',
    prep: '<:prep:535541258546970624>',
    divert: '<:divert:787904334377648130>',
    combust: '<:comb:535533833098100745>',
    shatter: '<:Shatter:536256673904328704>',
    ranged: '<:range:580168050121113623>',
    eofPink: '<:eofpink:780401412865523722>',
    eofGreen: '<:eofgreen:780401412727242773>',
    eofBlack: '<:eofblack:780401412915855380>',
    eofBlue: '<:eofblue:780401412906680330>',
    sbsLunar: '<:SBSLunars:565726489467682816>',
    disrupt: '<:disrupt:535614336207552523>',
    nati: '<:nat:535541258131865633>',
    corruptionBlast: '<:corruptblast:513190159194259467>',
    dazing: '<:mds:535541259033378827>',
    rapid: '<:rapid:535541270521708566>',
    snap: '<:snap:535534127131394088>',
    snipe: '<:snipe:535541258425204770>',
    piercing: '<:piercing:535541258538450944>',
    corruptionShot: '<:corruptshot:535541306294796299>',
    shadowTendril: '<:shadowtend:642713547142332416>',
    incend: '<:incend:535541258429661215>',
    meteor: '<:meteorstrike:535532879359377439>',
    bolgStacks: '<:perfectequilibrium:1006119102814887957>',
    resonance: '<:res:535541258844635148>',
    cease: '<:cease:864235458464186418>',
    decimate: '<:deci:535532879325822986>',
    assault: '<:assault:535532855191928842>',
    overpower: '<:overpower:535532879334080517>',
    destroy: '<:destroy:535532879330148352>',
    eofRed: '<:eofred:780401412839833601>',
    dclaws: '<:dragonclaw:779048041088024606>',
    roar: '<:chaosroar:994644356671737966>',
    rubyAurora: '<:RubyAurora:574292444791963659>',
    bsa: '<:blackstonearrow:785031580149743617>',
    cryptHelm: '<:cryptbloomhelm:892819107123195956>',
    cryptBody: '<:cryptbloombody:892819107253194762>',
    cryptLegs: '<:cryptbloomlegs:892819107223851058>',
    cryptGloves: '<:cryptbloomgloves:892819106879922179>',
    noxBow: '<:noxbow:513190159425208342>',
    dive: '<:dive:1049378668197195808>',
    spiritCape: '<:spiritcape:697405301623619624>',
    replenishment: '<:enhreplen:634350450887622656>',
    iceBlitz: '<:iceblitz:535613865912696883>'
}


export const TextUtils = {
    subpoint: '\n\u00a0\u00a0\u00a0\u00a0•',
    noSpaceSubPoint: '\u00a0\u00a0\u00a0\u00a0•'
}

export const createEmbed = (data: string, colour: number) => {
    return {
        color: colour,
        description: data
    };
}

export const createEmbedBuilder = (data: string, colour: number, image?: string) => {
    const embed = new EmbedBuilder()
        .setColor(colour)
        .setDescription(data);
    if (typeof image !== 'undefined') embed.setImage(image);
    return embed;
}

export const styleTitle = (value: string) => {
    return `> __**${value}**__`;
}

const DevChannels = {
    leaderboard: '1024897631715069962',
    applyForRank: '1025418108711731240',
    performanceExpectations: '1024896851436122145',
    additionalInfo: '1024897391549227038',
    readingConfirmation: '1025994029290238032',
    rules: '1024896890648666112',
    ranks: '1025998858397945946',
    bot: '1026531701591122061',
    gear: '1025998799635755079',
    magicGuide: '1024897854692659221',
    rangedGuide: '1024897871046262844',
    changelog: '1030320969325215766',
    hybridGuide: '1024897901819871272',
    otherGuide: '1032888041104216084',
    botGuide: '1033224923734356018',
    streamers: '1033768665633525850',
    affiliates: '1038428611994202183',
}

const ProdChannels = {
    leaderboard: '1027065926283186206',
    applyForRank: '742114134400958589',
    performanceExpectations: '1027052084455014421',
    additionalInfo: '1027049057031565373',
    readingConfirmation: '1025994029290238032',
    rules: '1027051461919658045',
    ranks: '1027051628311892009',
    bot: '742114134400958591',
    gear: '1027051656367591474',
    magicGuide: '1027115254091620393',
    rangedGuide: '1027115278204669962',
    changelog: '1029912967074033755',
    hybridGuide: '1027115316783886367',
    otherGuide: '1032887045351293040',
    botGuide: '1029912020608356452',
    streamers: '742114133796847681',
    affiliates: '742114133796847683'
}

const DevRoles: any = {
    mainTrialHost: '<@&1024973897621315584>',
    extreme: '<@&1024979670766194738>',
    adept: '<@&1026506909945172069>',
    mastery: '<@&1026380140655153163>',
    meleeEnt: '<@&1025444893931352084>',
    meleeUmbra: '<@&1025444129951449128>',
    rangedEnt: '<@&1025639306045435904>',
    rangedUmbra: '<@&1025639254300299434>',
    magicEnt: '<@&1025676489770926081>',
    magicEntAdept: '<@&1026370030943883345>',
    magicEntMastery: '<@&1026370099671740537>',
    magicEntExtreme: '<@&1026370194161020968>',
    ironman: '<@&1025996624318705747>',
    cdar: '<@&1026002395060248576>',
    chinner: '<@&1026002430405660712>',
    meleeFree: '<@&1026002457303732257>',
    organiser: '<@&1026018780305948732>',
    coOwner: '<@&1026018856952668160>',
    applicationTeam: '<@&1026018904704831590>',
    trialTeam: '<@&1026018931288313936>',
    readyForTrial: '<@&1026018741852586096>',
    magicFreeMastery: '<@&1026377160052711434>',
    magicFreeExtreme: '<@&1026377263689764955>',
    magicBase: '<@&1026378978077970452>',
    magicBaseAdept: '<@&1026379013897338920>',
    magicBaseMastery: '<@&1026379061976649798>',
    magicBaseExtreme: '<@&1026379088266543127>',
    rangedEntAdept: '<@&1026390072305655831>',
    rangedEntMastery: '<@&1026390214148624394>',
    rangedEntExtreme: '<@&1026390222881169448>',
    chinnerAdept: '<@&1026390384865194006>',
    chinnerMastery: '<@&1026390532483715073>',
    chinnerExtreme: '<@&1026390539454664735>',
    rangedFreeMastery: '<@&1026390687140282449>',
    rangedFreeExtreme: '<@&1026390737903964200>',
    mrEnt: '<@&1026391709816455278>',
    mrEntAdept: '<@&1026489564191260816>',
    mrEntMastery: '<@&1026489881079337010>',
    mrEntExtreme: '<@&1026489882664763422>',
    mrFree: '<@&1036605223684280321>',
    mrFreeMastery: '<@&1026489885835657347>',
    mrFreeExtreme: '<@&1026490072297635860>',
    mrBase: '<@&1026490160365437079>',
    mrBaseMastery: '<@&1040307051009687622>',
    mrBaseExtreme: '<@&1040307091740561418>',
    mrHammer: '<@&1026490379920482354>',
    mrHammerAdept: '<@&1026490417958629476>',
    mrHammerMastery: '<@&1026490421985161346>',
    mrHammerExtreme: '<@&1026490425781010462>',
    meleeEntAdept: '<@&1026501791690543205>',
    meleeEntMastery: '<@&1026501870656684164>',
    meleeEntExtreme: '<@&1026501900075544597>',
    meleeFreeAdept: '<@&1026502001812582481>',
    meleeFreeMastery: '<@&1026502005692309534>',
    meleeFreeExtreme: '<@&1026502009244876930>',
    archAngel: '<@&1026506250713833482>',
    aodMaster: '<@&1026506320699998209>',
    deathDestroyer: '<@&1026506366753448088>',
    ofThePraesul: '<@&1026510296484954164>',
    truePraesul: '<@&1026510296577212576>',
    streamer: '<@&1026510377015578664>',
    t1AoD: '<@&1026519292390412288>',
    t2AoD: '<@&1026519390553915432>',
    t3AoD: '<@&1026519427899998248>',
    t4AoD: '<@&1026519440147349524>',
    aodFanatic: '<@&1026519503724617769>',
    angelSlayer: '<@&1026519507621130310>',
    member: '<@&1026696194224824351>',
    vulner: '<@&1053715273947037769>',
    necroEnt: '<@&1152047655334191115>',
    necroHammer: '<@&1152048088723243058>',
    necroFree: '<@&1152047889384747039>',
    necroBase: '<@&1152048226363519156>',
    necroEntAdept: '<@&1153057523969052792>',
    necroHammerAdept: '<@&1153057632878329867>',
    necroBaseAdept: '<@&1153057715657134121>',
    necroEntMastery: '<@&1153057919668064399>',
    necroHammerMastery: '<@&1153057985480904736>',
    necroFreeMastery: '<@&1153057855138693220>',
    necroBaseMastery: '<@&1153058051973193889>',
    necroEntExtreme: '<@&1153058592698671174>',
    necroHammerExtreme: '<@&1153058729256829028>',
    necroFreeExtreme: '<@&1153058629012951060>',
    necroBaseExtreme: '<@&1153058785556971521>',
}

const ProdRoles: any = {
    mainTrialHost: '<@&742114133419491395>',
    extreme: '<@&742114133293400244>',
    adept: '<@&1026506909945172069>',
    mastery: '<@&1004490584267968673>',
    meleeEnt: '<@&742114133184610327>',
    meleeUmbra: '<@&742114133184610329>',
    rangedEnt: '<@&753695750084362344>',
    rangedUmbra: '<@&830948896771538964>',
    magicEnt: '<@&742114133184610331>',
    magicEntAdept: '<@&742114133184610332>',
    magicEntMastery: '<@&742114133293400238>',
    magicEntExtreme: '<@&742114133385937036>',
    ironman: '<@&1021940132938522644>',
    cdar: '<@&742114133154988155>',
    chinner: '<@&742114133154988156>',
    meleeFree: '<@&742114133154988158>',
    organiser: '<@&742114133419491396>',
    coOwner: '<@&742114133419491397>',
    applicationTeam: '<@&742114133201387564>',
    trialTeam: '<@&742114133201387563>',
    readyForTrial: '<@&1004269143547187230>',
    magicFreeMastery: '<@&896143975969333289>',
    magicFreeExtreme: '<@&896144166688555008>',
    magicBase: '<@&742114133184610324>',
    magicBaseAdept: '<@&742114133184610325>',
    magicBaseMastery: '<@&742114133293400240>',
    magicBaseExtreme: '<@&742114133385937035>',
    rangedEntAdept: '<@&834981107316949032>',
    rangedEntMastery: '<@&804514651684864010>',
    rangedEntExtreme: '<@&802363763931873281>',
    chinnerAdept: '<@&742114133154988157>',
    chinnerMastery: '<@&742114133293400242>',
    chinnerExtreme: '<@&742114133385937033>',
    rangedFreeMastery: '<@&864510428579233812>',
    rangedFreeExtreme: '<@&864510710414573612>',
    mrEnt: '<@&1023347425282363515>',
    mrEntAdept: '<@&1004493329196666961>',
    mrEntMastery: '<@&1024414967593717852>',
    mrEntExtreme: '<@&1024415189162000466>',
    mrFree: '<@&1024416642970701986>',
    mrFreeMastery: '<@&1024415063706173500>',
    mrFreeExtreme: '<@&1024415223337197588>',
    mrBase: '<@&1024419806948110418>',
    mrBaseMastery: '<@&1025417261244219412>',
    mrBaseExtreme: '<@&1040306198890696746>',
    mrHammer: '<@&1023347697584963596>',
    mrHammerAdept: '<@&1024410676300627968>',
    mrHammerMastery: '<@&1024415099613626509>',
    mrHammerExtreme: '<@&1024415276000878652>',
    meleeEntAdept: '<@&742114133184610328>',
    meleeEntMastery: '<@&742114133293400241>',
    meleeEntExtreme: '<@&742114133385937034>',
    meleeFreeAdept: '<@&742114133154988159>',
    meleeFreeMastery: '<@&742114133293400237>',
    meleeFreeExtreme: '<@&742114133385937031>',
    archAngel: '<@&742114133385937037>',
    aodMaster: '<@&742114133419491389>',
    deathDestroyer: '<@&742114133419491390>',
    ofThePraesul: '<@&742114133201387567>',
    truePraesul: '<@&742114133201387568>',
    streamer: '<@&742114133201387569>',
    t1AoD: '<@&818499760205594634>',
    t2AoD: '<@&818499667276333056>',
    t3AoD: '<@&818499303999799368>',
    t4AoD: '<@&818499185166909442>',
    aodFanatic: '<@&818499016576073748>',
    angelSlayer: '<@&818498816923009035>',
    member: '<@&742114133201387565>',
    vulner: '<@&1052693087337578637>',
    necroEnt: '<@&1152047655334191115>',
    necroHammer: '<@&1152048088723243058>',
    necroFree: '<@&1152047889384747039>',
    necroBase: '<@&1152048226363519156>',
    necroEntAdept: '<@&1153057523969052792>',
    necroHammerAdept: '<@&1153057632878329867>',
    necroBaseAdept: '<@&1153057715657134121>',
    necroEntMastery: '<@&1153057919668064399>',
    necroHammerMastery: '<@&1153057985480904736>',
    necroFreeMastery: '<@&1153057855138693220>',
    necroBaseMastery: '<@&1153058051973193889>',
    necroEntExtreme: '<@&1153058592698671174>',
    necroHammerExtreme: '<@&1153058729256829028>',
    necroFreeExtreme: '<@&1153058629012951060>',
    necroBaseExtreme: '<@&1153058785556971521>',
}

export const Roles = environment === 'PRODUCTION' ? ProdRoles : DevRoles;

export const Channels = environment === 'PRODUCTION' ? ProdChannels : DevChannels;