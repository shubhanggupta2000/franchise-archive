import type { Franchise } from "./types";
import { mcu } from "./mcu";
import { dceu } from "./dceu";
import { dcu } from "./dcu";
import { arrowverse } from "./arrowverse";
import { fastFurious } from "./fastFurious";
import { starWars } from "./starWars";
import { wizardingWorld } from "./wizardingWorld";
import { middleEarth } from "./middleEarth";
import { xmen } from "./xmen";
import { spiderVerse } from "./spiderVerse";
import { starTrek } from "./starTrek";
import { narnia } from "./narnia";
import { missionImpossible } from "./missionImpossible";
import { jamesBond } from "./jamesBond";
import { johnWick } from "./johnWick";
import { gotUniverse } from "./gotUniverse";
import { breakingBadUniverse } from "./breakingBadUniverse";
import { conjuringUniverse } from "./conjuringUniverse";

export const franchises: Franchise[] = [
  mcu,
  dceu,
  dcu,
  xmen,
  spiderVerse,
  starWars,
  starTrek,
  wizardingWorld,
  middleEarth,
  narnia,
  fastFurious,
  missionImpossible,
  jamesBond,
  johnWick,
  gotUniverse,
  breakingBadUniverse,
  arrowverse,
  conjuringUniverse,
];

export type { Franchise, Entry } from "./types";
