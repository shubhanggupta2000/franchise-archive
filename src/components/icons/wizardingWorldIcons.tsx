import Logo from "../assets/Wizarding_World.svg";

export default function WizardingWorldIcon({ className }: { className?: string }) {
  return <img src={Logo} alt="Wizarding World logo" className={className} />;
}