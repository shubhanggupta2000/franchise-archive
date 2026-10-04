import AvengersLogo from "../assets/avengers.svg";

export default function McuIcon({ className }: { className?: string }) {
  return <img src={AvengersLogo} alt="Avengers logo" className={className} />;
}
