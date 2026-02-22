"use client";

import { useEffect, useMemo, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

type ThemeSetting = "system" | "light" | "dark";

const THEME_KEY = "khanhs_studio_theme";

function getStoredTheme(): ThemeSetting {
  if (typeof window === "undefined") return "system";
  const raw = localStorage.getItem(THEME_KEY);
  if (raw === "light" || raw === "dark" || raw === "system") return raw;
  return "system";
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: ThemeSetting) {
  const effective = theme === "system" ? getSystemTheme() : theme;
  document.documentElement.classList.toggle("dark", effective === "dark");
  document.documentElement.style.colorScheme = effective === "dark" ? "dark" : "light";
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<ThemeSetting>("system");
  const effective = useMemo(() => (theme === "system" ? getSystemTheme() : theme), [theme]);

  useEffect(() => {
    const stored = getStoredTheme();
    setTheme(stored);
    applyTheme(stored);

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (getStoredTheme() === "system") applyTheme("system");
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  function cycle() {
    const next: ThemeSetting =
      theme === "system" ? "dark" : theme === "dark" ? "light" : "system";
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  const label =
    theme === "system"
      ? `Giao diện: Hệ thống (${effective === "dark" ? "Tối" : "Sáng"})`
      : `Giao diện: ${theme === "dark" ? "Tối" : "Sáng"}`;

  return (
    <button
      type="button"
      onClick={cycle}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        className,
      )}
      aria-label={label}
      title={label}
    >
      {theme === "system" ? (
        <Monitor className="h-4 w-4" />
      ) : theme === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
