/*∷YAY⟨C-b21b-2⟩
  unit: useTheme
  lang: js
  in: void
  out: { theme: "light"|"dark", toggleTheme: () => void, setTheme: (t) => void }
  pure: no
  effects: dom; localStorage
  ensures: |
    out.theme === "light" || out.theme === "dark";
    typeof out.toggleTheme === "function";
    typeof out.setTheme === "function";
    calling out.toggleTheme() flips the stored theme;
    out.setTheme("light") sets stored theme to "light";
    out.setTheme("dark") sets stored theme to "dark"
  intent: React hook that exposes the current theme (light or dark) and helpers to toggle or set it, persisting across reloads and reflecting changes on the document root.
  risk: low
⟧*/
/*∷YAY-END⟨C-b21b-2⟩*/
import { useState, useEffect, useCallback } from 'react';

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = window.localStorage.getItem('trip-gallery-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('trip-gallery-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const setTheme = useCallback((next) => {
    if (next === 'light' || next === 'dark') {
      setThemeState(next);
    }
  }, []);

  return { theme, toggleTheme, setTheme };
}
