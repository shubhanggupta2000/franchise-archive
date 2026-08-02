import ArrowverseIcon from "./arrowverseIcons";
import DceuIcon from "./dceuIcons";
import DcuIcon from "./dcuIcons";
import FastFuriousIcon from "./fastFuriousIcons";
import MiddleEarthIcon from "./middleEarthIcons";
import StarWarsIcon from "./starWarsIcons";
import WizardingWorldIcon from "./wizardingWorldIcons";
import XmenIcon from "./xmenIcons";


export const franchiseIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  arrowverse: ArrowverseIcon,
  dceu: DceuIcon,
  dcu: DcuIcon,
  fastFurious: FastFuriousIcon,
  middleEarth: MiddleEarthIcon,
  starWars: StarWarsIcon,
  wizardingWorld: WizardingWorldIcon,
  xmen: XmenIcon
}