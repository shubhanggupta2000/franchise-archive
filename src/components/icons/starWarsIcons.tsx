import Logo from "../assets/Star_wars.svg";

export default function StarWarsIcon({ className }: { className?: string }) {
  return <img src={Logo} alt="Star Wars logo" className={className} />;
}