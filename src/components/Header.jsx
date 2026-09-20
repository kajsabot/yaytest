/*∷YAY⟨C-b21b-15⟩
  unit: Header
  lang: jsx
  in: props: { title: string, subtitle: string }
  out: header element
  renders: yes
  pure: yes
  ensures: text(out).includes(props.title) && text(out).includes(props.subtitle) && findAll(out, "h1").length >= 1 && find(out, "img") !== null
  intent: Renders the Kaijsas Gallery header — a small Kaijsa avatar/logo on the left, the site title and subtitle on the right. No theme toggle (light mode only).
  risk: low
⟧*/
/*∷YAY-END⟨C-b21b-15⟩*/
export function Header({ title, subtitle }) {
  return (
    <header className="site-header" data-testid="site-header">
      <img
        className="site-header__logo"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23b8633d'/%3E%3Ctext x='32' y='42' font-family='Georgia' font-size='34' fill='%23fffaf2' text-anchor='middle' font-weight='700'%3EK%3C/text%3E%3C/svg%3E"
        alt="Kajsa logo"
      />
      <div className="site-header__text">
        <h1 className="site-header__title">{title}</h1>
        <p className="site-header__subtitle">{subtitle}</p>
      </div>
    </header>
  );
}
