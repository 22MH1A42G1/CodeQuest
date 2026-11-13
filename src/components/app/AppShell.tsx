import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { BarChart3, BookOpen, Building2, CalendarCheck, Code2, FileText, LayoutDashboard, ListChecks, LogOut, Menu, MessageSquare, Settings } from "lucide-react";
import { recordStudyMinute } from "@/lib/study.functions";
import { ThemeToggle } from "./ThemeToggle";
import { supabase } from "@/integrations/supabase/client";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const NAV = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/learn", label: "Learn DSA", icon: BookOpen },
  { to: "/practice", label: "Coding Practice", icon: Code2 },
  { to: "/problems", label: "Problem Bank", icon: ListChecks },
  { to: "/interviews", label: "Mock Interviews", icon: MessageSquare },
  { to: "/company-prep", label: "Company Preparation", icon: Building2 },
  { to: "/daily", label: "Daily Challenges", icon: CalendarCheck },
  { to: "/notes", label: "My Notes", icon: FileText },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const qc = useQueryClient();
  const navigate = useNavigate();
  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }
  return (
    <div className="flex h-full flex-col">
      <div className="px-5 py-5"><Logo to="/dashboard" /></div>
      <nav className="flex-1 space-y-1 px-3">
        {NAV.map(({ to, label, icon: Icon }) => {
          const active = path === to || path.startsWith(to + "/");
          return (
            <Link
              key={to}
              to={to}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className={cn("size-4", active && "text-primary")} />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-sidebar-border p-3">
        <ThemeToggle />
        <button onClick={signOut} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground/75 hover:bg-sidebar-accent/60">
          <LogOut className="size-4" /> Sign out
        </button>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const focus = /^\/practice\/[^/]+/.test(path);
  const recordMinute = useServerFn(recordStudyMinute);
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") void recordMinute({ data: { minutes: 1 } }).catch(() => undefined);
    }, 60_000);
    return () => window.clearInterval(timer);
  }, [recordMinute]);
  return (
    <div className="flex min-h-screen bg-background">
      {!focus && (
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-sidebar-border bg-sidebar lg:block">
          <NavList />
        </aside>
      )}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-72 border-sidebar-border bg-sidebar p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <NavList onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className={cn("sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur", !focus && "lg:hidden")}>
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu />
          </Button>
          <Logo to="/dashboard" />
          <div className="ml-auto"><ThemeToggle /></div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
