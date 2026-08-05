import AvengersLogo from "../assets/marvel-avengers.svg";

export default function McuIcon({ className }: { className?: string }) {
  return <img src={AvengersLogo} alt="Avengers logo" className={className} />;
}
