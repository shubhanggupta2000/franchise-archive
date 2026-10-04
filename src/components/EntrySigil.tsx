const iconFiles = import.meta.glob("./assets/*.{svg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});

const iconUrls: Record<string, string> = {};
for (const [path, url] of Object.entries(iconFiles)) {
  const match = path.match(/\/([^/]+)\.(?:svg|png)$/);
  if (match && typeof url === "string") iconUrls[match[1]] = url;
}

const aliases: Array<[string, string]> = [
  ["the flash chronicles of cisco", "the_flash_chronicles_of_cisco"],
  ["the flash stretched scene", "the_flash_stretched_scene"],
  ["freedom fighters the ray", "freedom_fighters_the_ray"],
  ["avatar the last airbender", "avatar-the-last-airbender-air-symbol"],
  ["captain america civil war", "civil_war"],
  ["captain america", "captain_america"],
  ["captain marvel", "captain_marvel"],
  ["civil war", "civil_war"],
  ["black lightning", "black_lightning"],
  ["black panther", "black_panther"],
  ["black widow", "black_widow"],
  ["cloak and dagger", "cloak_and_dagger"],
  ["doctor strange", "doctor_strange"],
  ["deadpool wolverine", "deadpool-wolverine"],
  ["ant man", "ant_man"],
  ["fantastic four", "the-fantastic-four-first-steps"],
  ["iron fist", "iron_fist"],
  ["iron man", "iron_man"],
  ["moon knight", "moon_knight"],
  ["ms marvel", "ms-marvel-emblem"],
  ["scarlet witch", "scarlet_witch"],
  ["she hulk", "she_hulk"],
  ["spider man", "spiderman-mcu"],
  ["the punisher", "the_punisher"],
  ["the defenders", "the_defenders"],
  ["black bolt", "inhumans_black_bolt"],
  ["agent carter", "agent_carter"],
  ["agents of s h i e l d", "shield"],
  ["falcon", "falcon"],
  ["echo", "marvel-echo-logo-black"],
  ["hydra", "hydra"],
  ["ravagers", "ravagers"],
  ["runaways", "runaways_r"],
  ["thunderbolts", "marvel-thunderbolts"],
  ["marvel echo", "marvel-echo-logo-black"],
  ["daily bugle", "the_daily_bugle"],
  ["wakanda", "wakanda_flag_emblem"],
  ["ten rings", "the_ten_rings_red"],
  ["marvels", "the_marvels_emblems"],
  ["batwoman", "batwoman"],
  ["constantine", "constantine"],
  ["daredevil", "daredevil_dd"],
  ["hawkeye", "hawkeye"],
  ["supergirl", "supergirl"],
  ["arrow blood rush", "arrow_blood_rush"],
  ["arrowverse", "arrowverse"],
  ["arrow", "arrow"],
  ["the flash", "the_flash"],
  ["flash", "the_flash"],
  ["legends of tomorrow", "legends_of_tomorrow"],
  ["the boys", "series"],
  ["game of thrones", "gameofthrones"],
  ["house of the dragon", "House_Targaryen"],
  ["star trek", "star-trek-delta-shield"],
  ["star wars", "starwars_b8210c"],
  ["fast furious", "fast"],
  ["breaking bad", "breaking_bad_1sq_borderless"],
  ["wizarding world", "Wizarding_World"],
  ["middle earth", "one_ring_color"],
  ["avengers", "avengers"],
  ["thor", "thor"],
  ["hulk", "she_hulk"],
  ["eternals", "eternals-emblem-fbc632"],
  ["wakanda", "wakanda_flag_emblem"],
];

const franchiseSigils: Record<string, string> = {
  mcu: "avengers",
  arrowverse: "arrowverse",
  dceu: "dc_comics_2016",
  dcu: "DC_Studios",
  "star-wars": "Star_wars",
  "wizarding-world": "Wizarding_World",
  "middle-earth": "one_ring_color",
  gotUniverse: "House_Targaryen",
  "fast-furious": "fast",
  jamesBond: "007",
  "breaking-bad": "breaking_bad_1sq_borderless",
  "star-trek": "star-trek-delta-shield",
  "x-men": "xmen",
  "the-boys": "series",
  spiderVerse: "spider-verse",
};

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function getSigilUrl(
  values: Array<string | undefined>,
  crossover?: string,
  franchiseId?: string,
): string | undefined {
  const normalizedValues = values
    .filter((value): value is string => Boolean(value))
    .map(normalize);

  if (
    franchiseId === "mcu" &&
    normalizedValues.some((value) => value.includes("marvel one shot"))
  ) {
    return iconUrls.shield;
  }

  if (franchiseId === "wizarding-world") {
    if (normalizedValues.some((value) => value.startsWith("harry potter "))) {
      return iconUrls.hp;
    }
    return iconUrls.Wizarding_World;
  }

  if (franchiseId === "spiderVerse") {
    if (normalizedValues.some((value) => value.includes("raimi spider man trilogy"))) {
      return iconUrls["spider-man_trilogy"];
    }
    if (normalizedValues.some((value) => value.includes("mcu spider man"))) {
      return iconUrls["spiderman-mcu"];
    }
    if (normalizedValues.some((value) => value.includes("spider verse"))) {
      return iconUrls["spider-verse"];
    }
  }

  if (
    normalizedValues.some(
      (value) =>
        value.includes("guardians of the galaxy") ||
        value.includes("guardians galaxy"),
    )
  ) {
    return iconUrls.ravagers;
  }

  if (
    crossover &&
    values.some((value) =>
      [
        "arrow",
        "the flash",
        "supergirl",
        "legends of tomorrow",
        "batwoman",
        "black lightning",
        "vixen",
        "freedom fighters the ray",
      ].includes(normalize(value ?? "")),
    )
  ) {
    return iconUrls.arrowverse;
  }

  for (const [alias, file] of aliases) {
    const normalizedAlias = normalize(alias);
    if (
      normalizedValues.some((value) =>
        ` ${value} `.includes(` ${normalizedAlias} `),
      )
    ) {
      const url = iconUrls[file];
      if (url) return url;
    }
  }

  for (const value of normalizedValues) {
    const file = value.replace(/ /g, "_");
    if (iconUrls[file]) return iconUrls[file];
  }

  const fallback = franchiseId ? franchiseSigils[franchiseId] : undefined;
  return fallback ? iconUrls[fallback] : undefined;
}
