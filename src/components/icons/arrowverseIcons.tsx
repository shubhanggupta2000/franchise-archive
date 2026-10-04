import ArrowverseLogo from "../assets/arrowverse.svg";

export default function ArrowverseIcon({ className }: { className?: string }) {
  return <img src={ArrowverseLogo} alt="Arrowverse logo" className={className} />;
}