import Logo from "../assets/DC_Studios.svg";

export default function DcuIcon({ className }: { className?: string }) {
  return <img src={Logo} alt="DC Studios logo" className={className} />;
}