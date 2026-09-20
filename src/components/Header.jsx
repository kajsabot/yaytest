/*∷YAY⟨C-b21b-3⟩
  unit: Header
  lang: jsx
  in: props: { title: string }
  out: header element
  renders: yes
  pure: yes
  ensures: text(out).includes(props.title) && find(out, "button") !== null && findAll(out, "h1").length >= 1
  feeds: C-b21b-2
  intent: Renders the site header — title on the left, theme toggle button on the right. Reads theme state from useTheme.
  risk: low
⟧*/
/*∷YAY-END⟨C-b21b-3⟩*/
import { useTheme } from '../hooks/useTheme.jsx';

export function Header({ title }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="site-header" data-testid="site-header">
      <h1 className="site-title">{title}</h1>
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Byt till ljust läge' : 'Byt till mörkt läge'}
        title={theme === 'dark' ? 'Ljust läge' : 'Mörkt läge'}
      >
        {theme === 'dark' ? '☀' : '☾'}
      </button>
    </header>
  );
}
