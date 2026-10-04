import DceuLogo from "../assets/dc_comics_2016.svg";

export default function DceuIcon({ className }: { className?: string }) {
  return <img src={DceuLogo} alt="DC Comics logo" className={className} />;
}