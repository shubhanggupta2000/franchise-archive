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

export const franchises: Franchise[] = [
  mcu,
  dceu,
  dcu,
  arrowverse,
  fastFurious,
  starWars,
  wizardingWorld,
  middleEarth,
  xmen,
];

export type { Franchise, Entry } from "./types";
