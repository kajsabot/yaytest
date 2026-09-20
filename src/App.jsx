/*∷YAY⟨C-b21b-7⟩
  unit: App
  lang: jsx
  in: props: {}
  out: main element
  renders: yes
  pure: yes
  ensures: attr(find(out, "header"), "data-testid") === "site-header" && attr(find(out, "section"), "data-testid") === "gallery"
  feeds: C-b21b-3
  feeds: C-b21b-6
  intent: Renders the trip gallery app — a Header with site title and theme toggle, followed by the Gallery of photos.
  risk: low
⟧*/
/*∷YAY-END⟨C-b21b-7⟩*/
import { Header } from './components/Header.jsx';
import { Gallery } from './components/Gallery.jsx';

export function App() {
  return (
    <main className="app">
      <Header title="Turkiet 2026" />
      <p className="app__intro">
        Klicka på ett kort för att se vad bilden visar. Tryck igen för att vända tillbaka.
      </p>
      <Gallery title="En resa i åtta stopp" />
      <footer className="app__footer">
        <small>Bilder från Unsplash. Beskrivningar från min egen resa.</small>
      </footer>
    </main>
  );
}
