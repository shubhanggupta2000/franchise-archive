import ArrowverseIcon from "./arrowverseIcons";
import DceuIcon from "./dceuIcons";
import DcuIcon from "./dcuIcons";
import FastFuriousIcon from "./fastFuriousIcons";
import McuIcon from "./mcuIcon";
import MiddleEarthIcon from "./middleEarthIcons";
import StarWarsIcon from "./starWarsIcons";
import WizardingWorldIcon from "./wizardingWorldIcons";
import XmenIcon from "./xmenIcons";


export const franchiseIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  mcu: McuIcon,
  arrowverse: ArrowverseIcon,
  dceu: DceuIcon,
  dcu: DcuIcon,
  fastFurious: FastFuriousIcon,
  middleEarth: MiddleEarthIcon,
  starWars: StarWarsIcon,
  wizardingWorld: WizardingWorldIcon,
  xmen: XmenIcon
}