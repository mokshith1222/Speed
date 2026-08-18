'use client';

import { createContext, useContext, useEffect, useState, useCallback, useMemo, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('speedometer-theme') as Theme | null;
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved);
        document.documentElement.classList.toggle('dark', saved === 'dark');
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        setTheme('light');
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    } catch {
      // Ignore local storage error
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('speedometer-theme', nextTheme);
        document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      } catch {
        // Ignore local storage error
      }
      return nextTheme;
    });
  }, []);

  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
