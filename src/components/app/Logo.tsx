import { Link } from "@tanstack/react-router";
import { Braces } from "lucide-react";

export function Logo({ to = "/" as const }: { to?: "/" | "/dashboard" }) {
  return (
    <Link to={to} className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
        <Braces className="size-5 text-primary-foreground" />
      </span>
      <span className="font-display text-lg font-bold leading-none tracking-tight">
        DSA <span className="text-gradient">Mastery</span>
      </span>
    </Link>
  );
}
