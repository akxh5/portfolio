import { createContext, useContext, useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

function applyThemeToDOM(theme: Theme) {
  if (typeof window === "undefined") return;
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");
  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme);
  }
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "portfolio-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = (localStorage.getItem(storageKey) as Theme) || defaultTheme;
      applyThemeToDOM(saved);
      return saved;
    }
    return defaultTheme;
  });

  useLayoutEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, newTheme);
      }
      applyThemeToDOM(newTheme);
      flushSync(() => {
        setThemeState(newTheme);
      });
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
