import Logo from "../assets/House_Targaryen.png";

export default function GotIcon({ className }: { className?: string }) {
  return <img src={Logo} alt="Targaryen sigil" className={className} />;
}